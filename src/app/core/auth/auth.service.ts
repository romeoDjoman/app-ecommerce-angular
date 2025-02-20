import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user-model';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<UserModel | null>(null);
  public currentUser$: Observable<UserModel | null> = this.currentUserSubject.asObservable();

  constructor(private httpService: HttpService) {
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage() {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      try {
        this.currentUserSubject.next(JSON.parse(userJson));
      } catch (error) {
        console.error('Erreur lors du parsing JSON du currentUser:', error);
        // Optionnel : supprimer le mauvais item pour éviter les erreurs futures
        localStorage.removeItem('currentUser');
      }
    }
  }


  hasRole(expectedRole: string): boolean {
    const user = this.currentUserSubject.value;
    return user ? user.role.label === expectedRole : false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: UserModel): Observable<UserModel> {
    console.log('Tentative de connexion avec :', credentials);
    return new Observable((observer) => {
      this.httpService.post('/login', credentials).subscribe({
        next: (response: any) => {
          console.log('Connexion réussie:', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.error('Erreur lors de la connexion :', error);
          observer.error(error);
        },
      });
    });
  }

  signup(userDetails: UserModel): Observable<UserModel> {
    return this.httpService.post('/signup', userDetails);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

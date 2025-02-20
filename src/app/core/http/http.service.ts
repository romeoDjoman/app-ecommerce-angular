import { Injectable } from '@angular/core';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:9191/api';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.error('Erreur HTTP:', error);
    let errorMessage = 'Une erreur est survenue.';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code: ${error.status}, Message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  get<T>(endpoint: string): Observable<T> {
    console.log(`GET request: ${this.baseUrl}${endpoint}`);
    return this.http.get<T>(`${this.baseUrl}${endpoint}`).pipe(
      tap(() => console.log('GET réussi')),
      catchError(this.handleError)
    );
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(`POST request: ${this.baseUrl}${endpoint}`, data);
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data, { headers }).pipe(
      tap(() => console.log('POST réussi')),
      catchError(this.handleError)
    );
  }
}

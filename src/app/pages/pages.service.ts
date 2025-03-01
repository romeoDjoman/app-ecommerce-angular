import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CityModel } from '../core/models/city-model';
import { DepartementModel } from '../core/models/departement-model';
import { RegionModel } from '../core/models/region-model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private CITY_URL = 'assets/json/cities.json';
  private DEPARTEMENT_URL = 'assets/json/departments.json';
  private REGION_URL = 'assets/json/regions.json';

  // Breadcrumbs

  private breadcrumbsSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable(); // Expose as Observable

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd), // Écouter les changements de route
        map(() => this.buildBreadcrumb(this.activatedRoute.root)) // Construire le breadcrumb
      )
      .subscribe(breadcrumbs => {
        this.breadcrumbsSubject.next(breadcrumbs); // Mettre à jour le BehaviorSubject
      });
   }

   private buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.buildBreadcrumb(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }


  // Formulaire d'adresse

  getCities(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(this.CITY_URL);
  }

  getDepartments(): Observable<DepartementModel[]> {
    return this.http.get<DepartementModel[]>(this.DEPARTEMENT_URL);
  }

  getRegions(): Observable<RegionModel[]> {
    return this.http.get<RegionModel[]>(this.REGION_URL);
  }
  
}


import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './terms/terms.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const PAGES_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contactus', component: ContactUsComponent },

];

import { Routes } from '@angular/router';
import {LoginComponent} from '../../features/auth/login/login.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'admin', component: LoginComponent }
];

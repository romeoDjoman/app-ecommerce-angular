import { Routes } from '@angular/router';
import { roleGuard } from './core/auth/role.guard';
import {AdminDashboardComponent} from './roles/admin/admin-dashboard/admin-dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then(m => m.PAGES_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.routes').then(m => m.CART_ROUTES)
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'author',
    loadChildren: () =>
      import('./roles/author/author.routes').then((m) => m.AUTHOR_ROUTES),
    canActivate: [roleGuard],
    data: { roles: ['AUTHOR'] },
  },
  {
    path: 'reviewer',
    loadChildren: () =>
      import('./roles/reviewer/reviewer.routes').then((m) => m.REVIEWER_ROUTES),
    canActivate: [roleGuard],
    data: { roles: ['REVIEWER'] },
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./roles/user/user.routes').then((m) => m.USER_ROUTES),
    canActivate: [roleGuard],
    data: { roles: ['USER'] },
  },
];
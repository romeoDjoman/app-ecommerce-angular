import { Routes } from '@angular/router';
import {CartItemComponent} from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';


export const CART_ROUTES: Routes = [
  { path: 'items', component: CartItemComponent },
  { path: 'list', component: CartListComponent }
];


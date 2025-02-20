import { Routes } from '@angular/router';
import {CartItemComponent} from './cart-item/cart-item.component';


export const CART_ROUTES: Routes = [
  { path: 'cart-items', component: CartItemComponent },
  { path: 'cart-list', component: CartItemComponent}
];


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cart-list',
  imports: [
    CommonModule
  ],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
  animations: [
    trigger('toggleAnimation', [
      
      state('open', style({
        opacity: 1,
        height: '*', 
        overflow: 'hidden',
      })),
      
      state('closed', style({
        opacity: 0,
        height: '0px', 
        overflow: 'hidden',
      })),
      
      transition('closed => open', [
        animate('300ms ease-in-out')
      ]),
      
      transition('open => closed', [
        animate('300ms ease-in-out')
      ]),
    ]),
  ],
})
export class CartListComponent {

  // Toggle
  isCouponVisible: boolean = false;

  toggleCouponVisibility() {
    this.isCouponVisible = !this.isCouponVisible;
  }

}

import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ecommerce-angular';
}

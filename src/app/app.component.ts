import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {LoginComponent} from './features/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';

// @ts-ignore
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ecommerce-angular';
}

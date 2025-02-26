import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {HeroComponent} from '../../shared/hero/hero.component';
import {CategoryComponent} from '../../shared/category/category.component';
import {CoursesComponent} from '../../shared/courses/courses.component';
import {EventsComponent} from '../../shared/events/events.component';
import {FooterComponent} from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

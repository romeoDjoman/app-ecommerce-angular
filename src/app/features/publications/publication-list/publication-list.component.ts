import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/header/header.component';
import { BreadcrumbComponent } from '../../../shared/categories-components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-publication-list',
  imports: [
    CommonModule,
        HeaderComponent,
        BreadcrumbComponent
  ],
  templateUrl: './publication-list.component.html',
  styleUrl: './publication-list.component.css'
})
export class PublicationListComponent {

}

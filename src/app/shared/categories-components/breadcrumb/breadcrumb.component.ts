import { Component } from '@angular/core';
import { PagesService } from '../../../pages/pages.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private pagesService: PagesService) {
    
    this.pagesService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }


}

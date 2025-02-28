import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
   ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {

  constructor() { 
    console.log(this.carouselItems);
  }
  
  carouselItems: any[] = []; // Initialisation vide

  ngOnInit() {
    this.getData(); // Charger les données ici
  }

  getData() {
    this.carouselItems = [
      {
        image: 'assets/img/product/1.jpg',
        hoverImage: 'assets/img/product/back-1.jpg',
        category: 'Chocos',
        title: 'Mixed Fruits Chocolates Pack',
        newPrice: '$25',
        oldPrice: '$30',
        quantity: '1 Pack',
        rating: [1, 2, 3, 4],
      },
      {
        image: 'assets/img/product/2.jpg',
        hoverImage: 'assets/img/product/back-2.jpg',
        category: 'Juice',
        title: 'Organic Apple Juice Pack',
        newPrice: '$15',
        oldPrice: '$20',
        quantity: '100 ml',
        rating: [1, 2, 3, 4],
      },
      {
        image: 'assets/img/product/2.jpg',
        hoverImage: 'assets/img/product/back-2.jpg',
        category: 'Juice',
        title: 'Organic Apple Juice Pack',
        newPrice: '$15',
        oldPrice: '$20',
        quantity: '100 ml',
        rating: [1, 2, 3, 4],
      },
      {
        image: 'assets/img/product/2.jpg',
        hoverImage: 'assets/img/product/back-2.jpg',
        category: 'Juice',
        title: 'Organic Apple Juice Pack',
        newPrice: '$15',
        oldPrice: '$20',
        quantity: '100 ml',
        rating: [1, 2, 3, 4],
      }
    ];
    
    console.log('Données chargées:', this.carouselItems);
  }
    
}

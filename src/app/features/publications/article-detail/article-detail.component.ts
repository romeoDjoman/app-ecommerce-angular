import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-article-detail',
  imports: [HeaderComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {

  // Tab 
  activeTab: string = 'detail';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  isTabActive(tabId: string){
    return this.activeTab === tabId;
  }

  // Increment and Decrement
  quantity: number = 1; 
  @Output() quantityChange = new EventEmitter<number>(); 

  
  increment() {
    if (this.quantity < 10) { 
      this.quantity++;
      this.emitQuantityChange();
    }
  }

  
  decrement() {
    if (this.quantity > 1) { 
      this.quantity--;
      this.emitQuantityChange();
    }
  }

 
  validateQuantity() {
    if (this.quantity < 1) {
      this.quantity = 1; 
    } else if (this.quantity > 10) {
      this.quantity = 10;
    }
    this.emitQuantityChange();
  }


  private emitQuantityChange() {
    this.quantityChange.emit(this.quantity);
  }



}

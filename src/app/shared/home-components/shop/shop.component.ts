import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [
    CommonModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  activeTab: string = 'all';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  isTabActive(tabId: string){
    return this.activeTab === tabId;
  }
}

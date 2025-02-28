import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {HeroComponent} from '../../shared/home-components/hero/hero.component';
import { CategoryComponent } from "../../shared/home-components/category/category.component";
import { NewsComponent } from '../../shared/home-components/news/news.component';
import { LargeBannerComponent } from "../../shared/home-components/large-banner/large-banner.component";
import { ShopComponent } from "../../shared/home-components/shop/shop.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { DeliveryInfoComponent } from "../../shared/home-components/delivery-info/delivery-info.component";


@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    NewsComponent,
    CategoryComponent,
    LargeBannerComponent,
    ShopComponent,
    FooterComponent,
    DeliveryInfoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

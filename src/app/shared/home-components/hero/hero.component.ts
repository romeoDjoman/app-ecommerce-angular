import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{

  // imgHero1: any = "https://picsum.photos/200/300";

  imagePath_hero1: string = "assets/img/hero/hero-1.png";
  magePath_hero2: string = '/assets/img/hero/hero-2.png'; 

  ngAfterViewInit() {
    new Swiper('.hero-slider', {
      modules: [Autoplay, EffectFade, Pagination],
      loop: true,
      centeredSlides: true,
      speed: 2500,
      parallax: true,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  

}

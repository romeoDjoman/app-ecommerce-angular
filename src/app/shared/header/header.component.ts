import {Component, OnInit, AfterViewInit, Renderer2} from '@angular/core';
import { loaderData, logoData } from '../../../assets/js/imagedata.js';

@Component({
  selector: 'app-header',
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  logo = logoData;
  loader = loaderData;



  ngOnInit(): void {

  }

}

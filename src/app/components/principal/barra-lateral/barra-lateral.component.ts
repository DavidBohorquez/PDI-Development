import { style } from '@angular/animations';
import { Component,ElementRef,ViewChild, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {

  constructor(private render2: Renderer2){
  }
  
}

import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { EventosService } from '../../../../../app/eventos.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  data:any;

  constructor(private estudianteService: EventosService){
  }

  getData(): void {
    this.data=this.estudianteService.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

}


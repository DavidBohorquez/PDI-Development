import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/estudiante.service';

@Component({
  selector: 'app-informacion-basica',
  templateUrl: './informacion-basica.component.html',
  styleUrls: ['./informacion-basica.component.css']
})
export class InformacionBasicaComponent {

  nombre = "";

  constructor(private estudianteService: EstudianteService) {}

  getNombre(): void {
    this.nombre = this.estudianteService.getNombre();
  }

  ngOnInit(): void {
    this.getNombre();
  }
}

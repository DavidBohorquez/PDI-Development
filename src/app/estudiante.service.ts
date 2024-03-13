import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  nombreEst: string = "diego";

  getNombre(): string {
    return this.nombreEst;
  }
}

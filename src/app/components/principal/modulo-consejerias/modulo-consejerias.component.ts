import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'modulo-consejerias-root',
  templateUrl: './modulo-consejerias.component.html',
  styleUrls: ['./modulo-consejerias.component.css']
})
export class ModuloConsejeriasComponent {
  title = 'Front';
  constructor(router:Router) {
    //router.navigate(['/inicio']);
  }
}

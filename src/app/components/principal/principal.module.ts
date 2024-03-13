import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../shared/shared.module';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ConsejeriasComponent } from './consejerias/consejerias.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventoComponent } from './inicio/evento/evento.component';
import { EventosComponent } from './inicio/eventos/eventos.component';
import { InformacionBasicaComponent } from './inicio/informacion-basica/informacion-basica.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    BarraSuperiorComponent,
    BarraLateralComponent,
    ConsejeriasComponent,
    InicioComponent,
    EventoComponent,
    EventosComponent,
    InformacionBasicaComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedModule
  ]
})
export class PrincipalModule { }

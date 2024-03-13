import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModuloConsejeriasRoutingModule } from './modulo-consejerias-routing.module';
import { ModuloConsejeriasComponent } from './modulo-consejerias.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SuperiorComponent } from './superior/superior.component';
import { LateralComponent } from './lateral/lateral.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { RegistroComponent } from './registro/registro.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InfoComponent } from './info/info.component';
import 'hammerjs';
@NgModule({
  declarations: [
    ModuloConsejeriasComponent,
    SuperiorComponent,
    LateralComponent,
    InicioComponent,
    ChatComponent,
    SolicitudComponent,
    RegistroComponent,
    AgendaComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ModuloConsejeriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatFormFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  
  bootstrap: [ModuloConsejeriasComponent]
})
export class ModuloConsejeriasModule { }

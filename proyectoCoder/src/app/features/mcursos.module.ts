import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McursosRoutingModule } from './mcursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';
import { MisincripcionesComponent } from './components/misincripciones/misincripciones.component';
import { DetallesComponent } from './components/detalles/detalles.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    EditarcursoComponent,
    MisincripcionesComponent,
    DetallesComponent,
  ],
  imports: [
    CommonModule,
    McursosRoutingModule,
    SharedModule,
  ]
})
export class McursosModule { }

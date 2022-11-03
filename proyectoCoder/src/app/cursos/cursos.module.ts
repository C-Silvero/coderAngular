import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { MisincripcionesComponent } from './components/misincripciones/misincripciones.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';

@NgModule({
  declarations: [
   InscripcionesComponent,
   MisincripcionesComponent,
   EditarcursoComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class CursosModule { }
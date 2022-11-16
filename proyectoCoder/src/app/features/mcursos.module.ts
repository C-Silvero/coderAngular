import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McursosRoutingModule } from './mcursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';

import { DetallesComponent } from './components/detalles/detalles.component';
import { CursosinscriptosComponent } from './components/cursosinscriptos/cursosinscriptos.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    EditarcursoComponent,
    DetallesComponent,
    CursosinscriptosComponent,
    AgregarCursoComponent,
  ],
  imports: [
    CommonModule,
    McursosRoutingModule,
    SharedModule,
  ]
})
export class McursosModule { }

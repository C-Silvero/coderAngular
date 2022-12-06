import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McursosRoutingModule } from './mcursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';


@NgModule({
  declarations: [
    InscripcionesComponent,
    EditarcursoComponent,
    DetallesComponent,
    AgregarCursoComponent,
  ],
  imports: [
    CommonModule,
    McursosRoutingModule,
    SharedModule,
    StoreModule,
    StoreModule.forFeature(cursosFeatureKey, reducer)
  ]
})
export class McursosModule { }

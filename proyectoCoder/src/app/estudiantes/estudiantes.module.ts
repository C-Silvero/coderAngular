import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { HermandadesComponent } from './components/hermandades/hermandades.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EstudiantesRoutingModule } from './estudiantes.routing.module';
import { BooleanPipe } from './pipes/boolean.pipe'


@NgModule({
  declarations: [
   EstudiantesComponent,
   HermandadesComponent,
   CrearUsuarioComponent,
   EditarEstudianteComponent,
   BooleanPipe
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule,
    
  ]
})
export class EstudiantesModule { }
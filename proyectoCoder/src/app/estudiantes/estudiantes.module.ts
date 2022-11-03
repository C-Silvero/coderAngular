import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermandadesComponent } from './components/hermandades/hermandades.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { CoreModule } from '../core/core.module';
import { BooleanPipe } from './pipes/boolean.pipe';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EstudiantesComponent,
    HermandadesComponent,
    EditarEstudianteComponent,
    CrearUsuarioComponent,
    BooleanPipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class EstudiantesModule { }

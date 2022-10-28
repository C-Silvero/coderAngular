import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermandadesComponent } from './components/hermandades/hermandades.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { CoreModule } from '../core/core.module';
import { BooleanPipe } from './pipes/boolean.pipe';



@NgModule({
  declarations: [
    EstudiantesComponent,
    HermandadesComponent,
    BooleanPipe,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
})
export class EstudiantesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { MisincripcionesComponent } from './components/misincripciones/misincripciones.component';



const routes: Routes = [
  {path: '', component: InscripcionesComponent,}, 
  {path: 'editar', component: EditarcursoComponent, canActivate: [AdminGuard]},
  {path: 'misincripciones', component: MisincripcionesComponent},
  {path: 'detalles', component: DetallesComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McursosRoutingModule { }

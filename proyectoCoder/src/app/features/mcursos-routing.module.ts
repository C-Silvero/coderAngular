import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosinscriptosComponent } from './components/cursosinscriptos/cursosinscriptos.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';




const routes: Routes = [
  {path: '', component: InscripcionesComponent,}, 
  {path: 'editar', component: EditarcursoComponent, canActivate: [AdminGuard]},
  {path: 'misincripciones', component: CursosinscriptosComponent},
  {path: 'detalles', component: DetallesComponent},
  {path: 'agregar-curso', component: AgregarCursoComponent, canActivate:[AdminGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McursosRoutingModule { }

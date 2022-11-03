import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarcursoComponent } from './components/editarcurso/editarcurso.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { MisincripcionesComponent } from './components/misincripciones/misincripciones.component';


const routes: Routes = [
  { path: 'cursos', component: InscripcionesComponent, children: [
    {path: 'editar', component: EditarcursoComponent},
    {path: 'misincripciones', component: MisincripcionesComponent}
  ] }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
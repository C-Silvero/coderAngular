import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { HermandadesComponent } from './components/hermandades/hermandades.component';

const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesComponent, children: [
    { path: 'hermandades', component: HermandadesComponent },
    { path: 'crear', component: CrearUsuarioComponent },
    { path: 'editar', component: EditarEstudianteComponent },
  ]} 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
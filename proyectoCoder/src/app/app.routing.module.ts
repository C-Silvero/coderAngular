
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./autenticacion/components/login/login.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { FondoComponent } from "./core/components/fondo/fondo.component";
import { ValidacionGuard } from "./core/guards/validacion.guard";


const rutas: Routes = [
    {path: 'inicio', component: FondoComponent, canActivate: [ValidacionGuard]},
    { path: 'login' , component: LoginComponent},
    { path: 'cursos' , 
      loadChildren: () => import('./features/mcursos.module').then((m) => m.McursosModule)},
    { path: 'autenticacion', loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)},
    { path: 'estudiantes', loadChildren: () => import('./estudiantes/estudiantes.module').then((m) => m.EstudiantesModule )},
    { path: 'formulario' , component: FormularioComponent}, 
    { path: '', redirectTo: 'inicio', pathMatch: 'full'}
   
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

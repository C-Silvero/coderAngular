
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import { HermandadesComponent } from "./components/hermandades/hermandades.component";
import { FondoComponent } from "./components/fondo/fondo.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { InscripcionesComponent } from "./components/inscripciones/inscripciones.component";
import { EstudiantesComponent } from "./components/estudiantes/estudiantes.component";


const rutas: Routes = [
    { path: 'inicio' , component: FondoComponent},
    // { path: 'iniciohijos', children: [
    //     {path: 'fondo', component: FondoComponent}
    // ] },
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inscripciones', component: InscripcionesComponent},
    { path: 'hermandades', component: HermandadesComponent},
    { path: 'estudiantes', component: EstudiantesComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'crearusuario', component: CrearUsuarioComponent}
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

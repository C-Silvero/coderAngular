
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import { HermandadesComponent } from "./estudiantes/components/hermandades/hermandades.component";
// import { FondoComponent } from "./components/fondo/fondo.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { InscripcionesComponent } from "./components/inscripciones/inscripciones.component";
import { EstudiantesComponent } from "./estudiantes/components/estudiantes/estudiantes.component";
import { FondoComponent } from "./core/components/fondo/fondo.component";
import { EditarEstudianteComponent } from "./components/editar-estudiante/editar-estudiante.component";


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
    { path: 'crearusuario', component: CrearUsuarioComponent},
    { path: 'editarestudiante', component: EditarEstudianteComponent}
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarcursoPipe } from './pipes/buscarcurso.pipe'
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { AppRoutingModule } from './app.routing.module';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@NgModule({
  declarations: [
    AppComponent,
    InscripcionesComponent,
    FormularioComponent,
    BuscarcursoPipe,
    CrearUsuarioComponent,
    EditarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    EstudiantesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

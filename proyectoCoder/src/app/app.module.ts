import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HermandadesComponent } from './components/hermandades/hermandades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FondoComponent } from './components/fondo/fondo.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooleanPipe } from './pipes/boolean.pipe';
import { BuscarcursoPipe } from './pipes/buscarcurso.pipe'
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { MaterialModule} from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
@NgModule({
  declarations: [
    AppComponent,
    HermandadesComponent,
    FondoComponent,
    InscripcionesComponent,
    FormularioComponent,
    BooleanPipe,
    BuscarcursoPipe,
    CrearUsuarioComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,FondoComponent,InscripcionesComponent,HermandadesComponent, FormularioComponent, EstudiantesComponent]
})
export class AppModule { }

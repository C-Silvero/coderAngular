import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, from, Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Inscripciones } from 'src/app/models/inscripciones'
import { InscripcionesState } from 'src/app/models/inscripciones.state';
import { Sesion } from 'src/app/models/sesion';
import { CursoService } from '../../services/curso.service';
import { loadCursoss, loadCursossFailure, loadCursossSuccess } from '../../state/cursos.actions';
import { selectCursos, selectCursosState, selectStateCargando } from '../../state/cursos.selectors';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit, OnDestroy {
  sesion$!: Observable<Sesion>
  


  filtro : string = '';

  cursos! : Inscripciones[];
  cursos$!: Observable<Inscripciones[]>;
  suscripcion!: Subscription;
  cargando$: Observable<boolean>;


  constructor(
    private cursoService: CursoService,
    private routes: Router,
    private sesionService: SesionService,
    private store: Store<InscripcionesState>
  ) { 
    console.log('cursos works');
    this.cursos$ =  this.store.select(selectCursos); 
    this.cargando$ = this.store.select(selectStateCargando);
  }
  
  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion()
    // cargar cursos
    this.suscripcion = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Inscripciones[]) => {
        this.store.dispatch(loadCursoss())
      }
    })
    //cursos cargados
    this.suscripcion = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Inscripciones[]) => {
        this.store.dispatch(loadCursossSuccess({cursos}))
      },
      error: (error: any) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Vuelva a intentarlo en instantes',
            footer: '<a routerLink="inicio">Ir a Inicio</a>'
          })
        this.store.dispatch(loadCursossFailure(error))
      }
    })
    this.cursos$ = this.store.select(selectCursos)
    this.cargando$ = this.store.select(selectStateCargando)
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
    console.log('cursos disuelto');
  }

  editarCurso(curso: Inscripciones){
    this.routes.navigate(['cursos/editar', curso]);
  }
  
  verDetalle( curso: Inscripciones) {
    this.routes.navigate(['cursos/detalles', curso])
  }
  
  inscribirse( curso: Inscripciones) {
    console.log(curso);
  }

  eliminarCurso(id: number) {
   
  }


}

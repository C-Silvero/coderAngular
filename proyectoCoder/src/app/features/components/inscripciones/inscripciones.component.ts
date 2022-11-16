import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, from, Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Inscripciones } from 'src/app/models/inscripciones'
import { Sesion } from 'src/app/models/sesion';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  sesion$!: Observable<Sesion>
  


  filtro : string = '';

  cursos! : Inscripciones[];
  cursos$!: Observable<Inscripciones[]>;
  suscripcion: any;

  constructor(
    private cursoService: CursoService,
    private routes: Router,
    private sesionService: SesionService
  ) { 
    console.log('cursos works');

  }
  
  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion()
    this.cursos$ = this.cursoService.obtenerCursos() 
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
    this.cursoService.eliminarCurso(id)
    this.cursos$ = this.cursoService.obtenerCursos()
  }


}

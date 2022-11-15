import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, from, Observable } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones'
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  filtro : string = '';

  cursos! : Inscripciones[];
  cursos$!: Observable<Inscripciones[]>;
  suscripcion: any;

  constructor(
    private cursoService: CursoService,
    private routes: Router
  ) { 
    console.log('cursos works');

  }
  
  ngOnInit(): void {

    this.cursos$ = this.cursoService.obtenerCursos() 
  }


  editarCurso(curso: Inscripciones){
    this.routes.navigate(['cursos/editar', curso]);
  }
  
  verDetalle( curso: Inscripciones) {
    this.routes.navigate(['cursos/detalles', curso])
  }
  

}

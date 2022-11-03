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

    //  cursoService.obtenerCursosPromise().then( (valor : Inscripciones[]) => {
    //    this.cursos = valor;
    //    console.log(valor);
    //        }).catch( (error: any) => {
    //            console.log(error);
    //    })
    //   this.suscripcion = cursoService.obtenerCursosObservable().subscribe( {
    //     next: ( cursos: Inscripciones[]) => {
    //       this.cursos = cursos;
    //       console.log('next', cursos );
        
    //     }, 
    //    error: (e) => {
    //      console.log(e);        
    //     }
    //   })
    //    this.cursosObservable = cursoService.obtenerCursosObservable()

  }
  
  ngOnInit(): void {

    this.cursos$ = this.cursoService.obtenerCursos() 
  }


  editarCurso(curso: Inscripciones){
    this.routes.navigate(['editarcurso', curso]);
  }
    // from(this.cursos).pipe(
    //    filter((cursos : Inscripciones ) => cursos.nombre === 'Gimnasio' )
    //  ) .subscribe((cursos) => {
    //    console.log('from', cursos);
    //  })
  

  //  ngOnDestroy(): void {
  //    this.cursos.unsuscribe()
  //  }
  

}

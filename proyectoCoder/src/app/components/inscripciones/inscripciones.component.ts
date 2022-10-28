import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, Observable } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones'
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  filtro : string = '';

  cursos! : Inscripciones[];
  cursosObservable!: Observable<Inscripciones[]>;
  suscripcion: any;

  constructor(
    private cursoService: CursoService
  ) { 
    console.log('cursos works');

    cursoService.obtenerCursosPromise().then( (valor : Inscripciones[]) => {
      this.cursos = valor;
      console.log(valor);
          }).catch( (error: any) => {
              console.log(error);
      })
     this.suscripcion = cursoService.obtenerCursosObservable().subscribe( {
       next: ( cursos: Inscripciones[]) => {
         this.cursos = cursos;
         console.log('next', cursos );
        
       }, 
      error: (e) => {
        console.log(e);        
       }
     })
      this.cursosObservable = cursoService.obtenerCursosObservable()

  }
  
  ngOnInit(): void {
    from(this.cursos).pipe(
      filter((cursos : Inscripciones ) => cursos.nombre === 'Gimnasio' )
    ) .subscribe((cursos) => {
      console.log('from', cursos);
    })
  }

  //  ngOnDestroy(): void {
  //    this.cursos.unsuscribe()
  //  }
  

}

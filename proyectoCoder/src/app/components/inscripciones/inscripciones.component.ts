import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  cursosObservable!: Observable<Inscripciones[]>

  constructor(
    private cursoService: CursoService
  ) { 
    console.log('paso 1');

    cursoService.obtenerCursosPromise().then( (valor : Inscripciones[]) => {
      this.cursos = valor;
      console.log(valor);
          }).catch( (error: any) => {
              console.log(error);
      })
    // cursoService.obtenerCursosObservable().subscribe( {
    //   next: ( cursos: Inscripciones[]) => {
    //     this.cursos = cursos;
    //     console.log('next', cursos );
        
    //   }, 
    //   error: (e) => {
    //     console.log(e);        
    //   }
    // })
      this.cursosObservable = cursoService.obtenerCursosObservable()

  }
  
  ngOnInit(): void {
  }

}

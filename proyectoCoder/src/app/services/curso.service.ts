import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inscripciones } from '../models/inscripciones';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos  : Inscripciones [] = [  
    { img: './assets/examenfinal.jpg', nombre: 'Examen Final', fecha: new Date(2022, 8, 12), contenido: 'Obten tu certificado de asustador' },
    { img: './assets/puertas.jpg', nombre: 'Construcción de puertas', fecha: new Date(2022, 7, 9), contenido: 'Fabrica puertas al mundo humano'  },
    { img: './assets/sustolimpiadas.jpg', nombre: 'Sustolimpiadas',  fecha: new Date(2022, 1, 2), contenido: 'Participa con tu equipo en los Juegos' },
    { img: './assets/gimnasio.jpg', nombre: 'Gimnasio', fecha: new Date(2022, 2, 1), contenido: 'Entrenáte para potenciar tu fuerza' },
]

  constructor() {
    this.cursosObservable = new Observable<Inscripciones[]>((suscriptor) => {
      suscriptor.next(this.cursos);
    })
   }

  cursosObservable: Observable<Inscripciones[]>


  obtenerCursosPromise(): Promise<Inscripciones[] | any> {
    return new Promise ((resolve, reject) => {
      if ( this.cursos.length > 0) {
        resolve( this.cursos)
      } else {
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles'
        })
      }
      
    })
  }
  
  obtenerCursosObservable() {
    return this.cursosObservable
    // return of(this.cursos)
  }

}

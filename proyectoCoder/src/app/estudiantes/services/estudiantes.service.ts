import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante, Usuario } from '../../models/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  estudiantes: Estudiante []  = [ 
    {id:1 , img: './assets/mikew.png', nombre: 'Mike', apellido: 'Wazowski',},
    {id:2 , img: './assets/solli.png', nombre: 'James .P', apellido: 'Sullivan',},
    {id:3 , img: './assets/Terry_teri.webp', nombre: 'Terry y Terri', apellido: 'Perry',},
    {id:4 , img: './assets/art.png', nombre: 'Art', apellido: '', },
    {id:5 , img: './assets/doncarlton.png', nombre: 'Don', apellido: 'Carlton',},
    {id:6 , img: './assets/Squishy.png', nombre: 'Scott', apellido: 'Squibbles'},
    {id:7 , img: './assets/rur1.png', nombre: 'Johnny ', apellido: 'Worthignton III'},
    {id:8 , img: './assets/rur2.png', nombre: 'Randall', apellido: 'Boggs',},
    {id:9 , img: './assets/rur3.png', nombre: 'Chet', apellido: 'Alexander',},
    {id:10 , img: './assets/rur4.png', nombre: 'Reggie', apellido: 'Jacobs',},
    {id:11, img: './assets/rur5.png', nombre: 'Javier', apellido: 'Ríos',},
    {id:12 , img: './assets/rur6.png', nombre: 'Chip', apellido: 'Golf',},
    {id:13 , img: './assets/h1.png', nombre: 'Rosie ', apellido: 'Levin'},
    {id:14 , img: './assets/h2.png', nombre: 'Nadya', apellido: 'Petrov',},
    {id:15 , img: './assets/h3.png', nombre: 'Sonia', apellido: 'Lewis',},
    {id:16 , img: './assets/h4.png', nombre: 'Susan', apellido: 'Jensen',},
    {id:17 , img: './assets/h5.png', nombre: 'Rhonda', apellido: 'Boyd',},
    {id:18 , img: './assets/h6.png', nombre: 'Nancy', apellido: 'Kim',},
    {id:19 , img: './assets/j1.png', nombre: 'George ', apellido: 'Anderson' },
    {id:20 , img: './assets/j2.png', nombre: 'Roy', apellido: 'O Growlahan' },
    {id:21 , img: './assets/j3.png', nombre: 'Baboso ', apellido: 'Goreleyu' },
    {id:22 , img: './assets/j4.png', nombre: 'Dick', apellido: 'Pratt' },
    {id:23 , img: './assets/j5.png', nombre: 'Omar', apellido: 'Harris' },
    {id:24 , img: './assets/j6.png', nombre: 'Percy', apellido: 'Boleslav' },
    {id:25 , img: './assets/e1.png', nombre: 'Violet ', apellido: 'Steslicki',},
    {id:26 , img: './assets/e2.png', nombre: 'Donna ', apellido: 'Soohoo',},
    {id:27 , img: './assets/e3.png', nombre: 'Brynn ', apellido: 'Larson ',},
    {id:28 , img: './assets/e4.png', nombre: 'Maria ', apellido: 'Garcia',},
    {id:29 , img: './assets/e5.png', nombre: 'Carla ', apellido: 'Delgado'},
    {id:30 , img: './assets/e6.png', nombre: 'Debbie ', apellido: 'Gabler',},
    {id:31 , img: './assets/p1.png', nombre: 'Carrie', apellido: 'Williams'},
    {id:32 , img: './assets/p2.png', nombre: 'Naomi ', apellido: 'Jackson ',},
    {id:33 , img: './assets/p3.png', nombre: 'Heather', apellido: ' Olson ',},
    {id:34 , img: './assets/p4.png', nombre: 'Crystal ', apellido: 'Du Bois',},
    {id:35 , img: './assets/p5.png', nombre: 'Britney  ', apellido: 'Davis ',},
    {id:36 , img: './assets/p6.png', nombre: 'Taylor', apellido: ' Holbrook ',},
  ]

  private estudianteSubject: BehaviorSubject<Estudiante[]>
 
  obtenerEstudiante(){
    return this.estudiantes.slice()
  }
  constructor(
    
  ) {
    this.estudianteSubject = new BehaviorSubject<Estudiante[]>(this.estudiantes)
   }

  eliminarEstudiante(index: number) {
    this.estudiantes.splice(index, 1)
  }

  agregarUsuario( usuario : Usuario) {
    this.estudiantes.unshift( usuario )
  }

  editarEstudiante(estudiante: Estudiante) {
    let indice = this.estudiantes.findIndex((e: Estudiante) => e.id == estudiante.id);
      
    if ( indice > -1) {
      this.estudiantes[indice] = estudiante;
    }

    this.estudianteSubject.next(this.estudiantes)
    
  }

}

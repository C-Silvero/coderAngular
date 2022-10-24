import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  estudiantes: Estudiante []  = [ 
    {img: './assets/mikew.png', nombre: 'Mike', apellido: 'Wazowski',},
    {img: './assets/solli.png', nombre: 'James .P', apellido: 'Sullivan',},
    {img: './assets/Terry_teri.webp', nombre: 'Terry y Terri', apellido: 'Perry',},
    {img: './assets/art.png', nombre: 'Art', apellido: '', },
    {img: './assets/doncarlton.png', nombre: 'Don', apellido: 'Carlton',},
    {img: './assets/Squishy.png', nombre: 'Scott', apellido: 'Squibbles'},
    {img: './assets/rur1.png', nombre: 'Johnny ', apellido: 'Worthignton III'},
    {img: './assets/rur2.png', nombre: 'Randall', apellido: 'Boggs',},
    {img: './assets/rur3.png', nombre: 'Chet', apellido: 'Alexander',},
    {img: './assets/rur4.png', nombre: 'Reggie', apellido: 'Jacobs',},
    {img: './assets/rur5.png', nombre: 'Javier', apellido: 'Ríos',},
    {img: './assets/rur6.png', nombre: 'Chip', apellido: 'Golf',},
    {img: './assets/h1.png', nombre: 'Rosie ', apellido: 'Levin'},
    {img: './assets/h2.png', nombre: 'Nadya', apellido: 'Petrov',},
    {img: './assets/h3.png', nombre: 'Sonia', apellido: 'Lewis',},
    {img: './assets/h4.png', nombre: 'Susan', apellido: 'Jensen',},
    {img: './assets/h5.png', nombre: 'Rhonda', apellido: 'Boyd',},
    {img: './assets/h6.png', nombre: 'Nancy', apellido: 'Kim',},
    {img: './assets/j1.png', nombre: 'George ', apellido: 'Anderson' },
    {img: './assets/j2.png', nombre: 'Roy', apellido: 'O Growlahan' },
    {img: './assets/j3.png', nombre: 'Baboso ', apellido: 'Goreleyu' },
    {img: './assets/j4.png', nombre: 'Dick', apellido: 'Pratt' },
    {img: './assets/j5.png', nombre: 'Omar', apellido: 'Harris' },
    {img: './assets/j6.png', nombre: 'Percy', apellido: 'Boleslav' },
    {img: './assets/e1.png', nombre: 'Violet ', apellido: 'Steslicki',},
    {img: './assets/e2.png', nombre: 'Donna ', apellido: 'Soohoo',},
    {img: './assets/e3.png', nombre: 'Brynn ', apellido: 'Larson ',},
    {img: './assets/e4.png', nombre: 'Maria ', apellido: 'Garcia',},
    {img: './assets/e5.png', nombre: 'Carla ', apellido: 'Delgado'},
    {img: './assets/e6.png', nombre: 'Debbie ', apellido: 'Gabler',},
    {img: './assets/p1.png', nombre: 'Carrie', apellido: 'Williams'},
    {img: './assets/p2.png', nombre: 'Naomi ', apellido: 'Jackson ',},
    {img: './assets/p3.png', nombre: 'Heather', apellido: ' Olson ',},
    {img: './assets/p4.png', nombre: 'Crystal ', apellido: 'Du Bois',},
    {img: './assets/p5.png', nombre: 'Britney  ', apellido: 'Davis ',},
    {img: './assets/p6.png', nombre: 'Taylor', apellido: ' Holbrook ',},
  ]


  obtenerEstudiante(){
    return this.estudiantes.slice()
  }
  constructor() { }

  eliminarEstudiante(index: number) {
    this.estudiantes.splice(index, 1)
  }

}

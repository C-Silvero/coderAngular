import { Component, OnInit } from '@angular/core';
import { Inscripciones } from 'src/app/models/inscripciones'

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  filtro : string = '';

  public inscripcion  : Array<Inscripciones> = [  
    { img: './assets/examenfinal.jpg', nombre: 'Examen Final', fecha: new Date(2022, 8, 12), contenido: 'Obten tu certificado de asustador' },
    { img: './assets/puertas.jpg', nombre: 'Construcción de puertas', fecha: new Date(2022, 7, 9), contenido: 'Fabrica puertas al mundo humano'  },
    { img: './assets/sustolimpiadas.jpg', nombre: 'Sustolimpiadas',  fecha: new Date(2022, 1, 2), contenido: 'Participa con tu equipo en los Juegos' },
    { img: './assets/gimnasio.jpg', nombre: 'Gimnasio', fecha: new Date(2022, 2, 1), contenido: 'Entrenáte para potenciar tu fuerza' },
]

  constructor() { }
  
  ngOnInit(): void {
  }

}

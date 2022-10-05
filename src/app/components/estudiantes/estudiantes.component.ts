import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public ESTUDIANTE: Array<Estudiantes> = [
    {
      img: './assets/mikew.png',
      nombre: 'Mike',
      apellido: 'Wazowski',
      calificacion: 7,
    },
    {
      img: './assets/solli.png',
      nombre: 'James .P',
      apellido: 'Sullivan',
      calificacion: 6,
    },
    {
      img: './assets/Terry_teri.webp',
      nombre: 'Terri y Terry' ,
      apellido: 'Perry',
      calificacion: 9 ,
    },
    {
      img: './assets/Squishy.png',
      nombre: 'Squishy',
      apellido: 'Squibbles',
      calificacion: 10,
    },
    {
      img: './assets/doncarlton.png',
      nombre: 'Don',
      apellido: 'Carlton',
      calificacion: 5,
    },
    {
      img: './assets/art.png',
      nombre: 'Art',
      apellido: '',
      calificacion: 5,
    },


  ];

  constructor() { }

  ngOnInit(): void {
  }

}

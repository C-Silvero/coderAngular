import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/models/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
// import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  listaEstudiantes: Estudiante[] = []


  displayedColumns = ['img', 'nombre', 'apellido', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private estudianteService : EstudiantesService
  )
   { }

  ngOnInit(): void {
    this.cargarEstudiantes()
  }

  cargarEstudiantes(){
    this.listaEstudiantes = this.estudianteService.obtenerEstudiante();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes)
  }

  removeData(index: number){
    console.log(index);
    this.estudianteService.eliminarEstudiante(index);
    this.cargarEstudiantes()
  }


}

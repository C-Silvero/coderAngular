import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { EstudiantesService } from '../../services/estudiantes.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  sesion$!: Observable<Sesion>

  listaEstudiantes: Estudiante[] = []


  displayedColumns = ['img', 'nombre', 'apellido', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private estudianteService : EstudiantesService,
    private router : Router,
    private sesionService: SesionService
  )
   { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion()
    this.cargarEstudiantes()
  }

  cargarEstudiantes(){
    this.listaEstudiantes = this.estudianteService.obtenerEstudiante();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes)
  }

  removeData(index: number){

    // libreria sweet alert para eliminar usuario

    Swal.fire({
      title: '¿Estás seguro que quieres eliminar este usuario?',
      showDenyButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#0078D4',
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.estudianteService.eliminarEstudiante(index);
        this.cargarEstudiantes()
        Swal.fire('Listo!', 'Se ha eliminado correctamente', 'success')
      } 
    })
    console.log(index);
    
  }

  editar( estudiante : Estudiante) {
    this.router.navigate(['estudiantes/editar', {
      id : estudiante.id,
      img: estudiante.img,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
    }])
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OK, RUR, HSS, JOX, EEK, PNK} from 'src/app/models/estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  // hermandades

   ok : OK[] = [
    
    {img: './assets/mikew.png', nombre: 'Mike', apellido: 'Wazowski',},
    {img: './assets/solli.png', nombre: 'James .P', apellido: 'Sullivan',},
    {img: './assets/Terry_teri.webp', nombre: 'Terry y Terri', apellido: 'Perry',},
    {img: './assets/art.png', nombre: 'Art', apellido: '',},
    {img: './assets/doncarlton.png', nombre: 'Don', apellido: 'Carlton',},
    {img: './assets/Squishy.png', nombre: 'Scott', apellido: 'Squibbles',},
  ]

  rur : RUR[] = [
    {img: './assets/rur1.png', nombre: 'Johnny ', apellido: 'Worthignton III',},
    {img: './assets/rur2.png', nombre: 'Randall', apellido: 'Boggs',},
    {img: './assets/rur3.png', nombre: 'Chet', apellido: 'Alexander',},
    {img: './assets/rur4.png', nombre: 'Reggie', apellido: 'Jacobs',},
    {img: './assets/rur5.png', nombre: 'Javier', apellido: 'Ríos',},
    {img: './assets/rur6.png', nombre: 'Chip', apellido: 'Golf',},
  ]

  hss : HSS[] = [
    {img: './assets/h1.png', nombre: 'Rosie ', apellido: 'Levin',},
    {img: './assets/h2.png', nombre: 'Nadya', apellido: 'Petrov',},
    {img: './assets/h3.png', nombre: 'Sonia', apellido: 'Lewis',},
    {img: './assets/h4.png', nombre: 'Susan', apellido: 'Jensen',},
    {img: './assets/h5.png', nombre: 'Rhonda', apellido: 'Boyd',},
    {img: './assets/h6.png', nombre: 'Nancy', apellido: 'Kim',},
  ]

  jox : JOX[] = [
    {img: './assets/j1.png', nombre: 'George ', apellido: 'Anderson',},
    {img: './assets/j2.png', nombre: 'Roy', apellido: 'O Growlahan',},
    {img: './assets/j3.png', nombre: 'Baboso ', apellido: 'Goreleyu',},
    {img: './assets/j4.png', nombre: 'Dick', apellido: 'Pratt',},
    {img: './assets/j5.png', nombre: 'Omar', apellido: 'Harris',},
    {img: './assets/j6.png', nombre: 'Percy', apellido: 'Boleslav',},
  ]

  eek : EEK[] = [
    {img: './assets/e1.png', nombre: 'Violet ', apellido: 'Steslicki',},
    {img: './assets/e2.png', nombre: 'Donna ', apellido: 'Soohoo',},
    {img: './assets/e3.png', nombre: 'Brynn ', apellido: 'Larson ',},
    {img: './assets/e4.png', nombre: 'Maria ', apellido: 'Garcia',},
    {img: './assets/e5.png', nombre: 'Carla ', apellido: 'Delgado',},
    {img: './assets/e6.png', nombre: 'Debbie ', apellido: 'Gabler',},
  ]

  pnk : PNK [] = [
    {img: './assets/p1.png', nombre: 'Carrie', apellido: 'Williams',},
    {img: './assets/p2.png', nombre: 'Naomi ', apellido: 'Jackson ',},
    {img: './assets/p3.png', nombre: 'Heather', apellido: ' Olson ',},
    {img: './assets/p4.png', nombre: 'Crystal ', apellido: 'Du Bois',},
    {img: './assets/p5.png', nombre: 'Britney  ', apellido: 'Davis ',},
    {img: './assets/p6.png', nombre: 'Taylor', apellido: ' Holbrook ',},
  ]

  dataSource = [...this.ok]
  dataSource2: MatTableDataSource<RUR> = new MatTableDataSource<OK>(this.rur)
  dataSource3: MatTableDataSource<HSS> = new MatTableDataSource<OK>(this.hss)
  dataSource5: MatTableDataSource<EEK> = new MatTableDataSource<OK>(this.eek)
  dataSource4: MatTableDataSource<JOX> = new MatTableDataSource<OK>(this.jox)
  dataSource6: MatTableDataSource<PNK> = new MatTableDataSource<OK>(this.pnk)


  // distribucion de la tabla
  displayedColumns: string[] = ['img', 'nombre', 'apellido', 'acciones'];
  


  constructor() { }

  ngOnInit(): void {
    
  }

}

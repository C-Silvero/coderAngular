import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/estudiantes';
import { UsuarioLogin } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesionSubject!: BehaviorSubject<Sesion>

  constructor(
    private http: HttpClient,
  ) {
    
    const sesion : Sesion ={
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion)
   }

   login ( nombre: string, password: string, admin: boolean) {
    const sesion : Sesion = {
    sesionActiva: true,
    usuarioActivo : {
      nombre: nombre,
      password: password,
      admin: admin
       }
     }
     this.sesionSubject.next(sesion)
  }

  obtenerSesion() : Observable<Sesion> {
    return this.sesionSubject.asObservable()
  }

  
}

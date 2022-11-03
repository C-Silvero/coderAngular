import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesionSubject!: BehaviorSubject<Sesion>

  constructor() {
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

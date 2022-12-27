import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, Observable, of, pipe, throwError } from 'rxjs';
import { environment } from '../../../environments/environment'
import { Inscripciones } from '../../models/inscripciones'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

 

  constructor(
    private http : HttpClient,
  ) {}

   obtenerCursos(): Observable<Inscripciones[]> {
    return this.http.get<Inscripciones[]>(`https://6361713367d3b7a0a6c6d7c9.mockapi.io/api`).pipe(
      delay(1500)
    )
  }
    

  verDetalle(curso: Inscripciones) {
    this.http.put<Inscripciones>(`https://6361713367d3b7a0a6c6d7c9.mockapi.io/${curso.nombre}`, curso).subscribe(console.log);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

  agregarCurso( curso: Inscripciones) {
    this.http.post(`https://6361713367d3b7a0a6c6d7c9.mockapi.io/api`, curso, { 
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).subscribe(console.log)
  }

  editarCurso(curso: Inscripciones){
    this.http.put<Inscripciones>(`https://6361713367d3b7a0a6c6d7c9.mockapi.io/api/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  eliminarCurso(id: number) {
    this.http.delete<Inscripciones>(`https://6361713367d3b7a0a6c6d7c9.mockapi.io/api/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  

}

import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { of } from 'rxjs';
describe('CursoService', () => {
  let httpClientSpy: { get: jasmine.Spy}
  let service: CursoService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new CursoService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it( 'El servicio retorna una array de usuarios mock' ,  ( done: DoneFn) => {
  //   const mockDatos = 
  //     [
  //       {
  //        "img": "https://i.postimg.cc/G3TJQShC/examenfinal.jpg",
  //        "nombre": "Examen Final",
  //        "fecha": "(2022, 8, 12)",
  //        "contenido": "Obten tu certificado de asustador",
  //        "id": "1"
  //       },
  //       {
  //        "img": "https://i.postimg.cc/Nf18h9HC/puertas.jpg",
  //        "nombre": "Construcción de puertas",
  //        "fecha": "(2022, 7, 9)",
  //        "contenido": "Fabrica puertas al mundo humano",
  //        "id": "2"
  //       },
  //       {
  //        "img": "https://i.postimg.cc/T3fVTdjd/sustolimpiadas.jpg",
  //        "nombre": "Sustolimpiadas",
  //        "fecha": "(2022, 1, 2)",
  //        "contenido": "Participa con tu equipo en los Juegos",
  //        "id": "3"
  //       },
  //       {
  //        "img": "https://i.postimg.cc/bNX0FHs2/gimnasio.jpg",
  //        "nombre": "Gimnasio",
  //        "fecha": "(2022, 2, 1)",
  //        "contenido": "Entrenáte para potenciar tu fuerza",
  //        "id": "4"
  //       }
  //      ];
  //   httpClientSpy.get.and.returnValue(of(mockDatos))

  //   service.obtenerCursos().subscribe((cursos) => {
  //     expect(cursos).toEqual(mockDatos);
  //     done()
  //   })
  // })


  
});

import { Pipe, PipeTransform } from '@angular/core';
import { Inscripciones } from '../../models/inscripciones';

@Pipe({
  name: 'buscarcurso'
})
export class BuscarcursoPipe implements PipeTransform {

  transform(inscripcion: Inscripciones[], filtro: string): Inscripciones[] {
     return inscripcion.filter( inscripcion => inscripcion.nombre.toLocaleLowerCase().includes(filtro))

   }

}

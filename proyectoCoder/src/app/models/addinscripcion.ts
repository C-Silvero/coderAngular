import { Usuario } from "./estudiantes";
import { Inscripciones } from "./inscripciones";

export interface Inscripcion {
    id: number,
    estudiante: Usuario[],
    curso: Inscripciones[]
}
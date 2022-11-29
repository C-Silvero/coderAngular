import { Inscripciones } from "./inscripciones";

export interface InscripcionesState{
    cargando: boolean;
    cursos: Inscripciones[];
}
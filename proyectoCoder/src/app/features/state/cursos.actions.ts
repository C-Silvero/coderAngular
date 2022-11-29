import { createAction, props } from '@ngrx/store';
import { Inscripciones } from 'src/app/models/inscripciones';

export const loadCursoss = createAction(
  '[Cursos] Cargando Cursos'
);

export const loadCursossSuccess = createAction(
  '[Cursos] Cursos cargados',
  props<{ cursos: Inscripciones[] }>()
);

export const loadCursossFailure = createAction(
  '[Cursos] Error en cursos cargados',
  props<{ error: any }>()
);

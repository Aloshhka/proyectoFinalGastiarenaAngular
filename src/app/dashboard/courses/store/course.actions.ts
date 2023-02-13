import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';

// CARGAR CURSOS
export const loadCourses = createAction(
  '[Course] Load Courses'
);

  // CARGAR CURSOS EXISTOSO
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ data: Course[] }>()
);

// CARGAR CURSOS ERROR
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: unknown }>()
);

// CREAR CURSO
export const createCourse = createAction(
  '[Course] Create Course',
  props<{ data: { title: string } }>()
)

// CREAR CURSO EXISTOSO
export const createCourseSuccess = createAction(
  '[Course] Create Course Success',
  props<{ data: Course }>()
)

// CREAR CURSO FALLO
export const createCourseFailure = createAction(
  '[Course] Create Course Failure',
  props<{ error: unknown }>()
)

export const resetCourseState = createAction('[Course] Reset Course State')

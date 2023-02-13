import { Action, createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';
import { Course } from '../models/course.model';

export const courseFeatureKey = 'course';

export interface State {
  data: Course[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // READ / LECTURA
  on(CourseActions.loadCourses, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(CourseActions.loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: action.data,
    }
  }),
  on(CourseActions.loadCoursesFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),

  // CREATE / CREACION

  on(CourseActions.createCourse, (state) => ({ ...state, loading: true })),
  on(CourseActions.createCourseSuccess, (state, action) => ({
    ...state,
    loading: false,
    data: [
      ...state.data,
      action.data
    ]
  })),
  on(CourseActions.resetCourseState, () => initialState)
);

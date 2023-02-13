import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CourseActions from './course.actions';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';


@Injectable()
export class CourseEffects {

  private baseURL = 'https://63b738094d97e82aa3b78a1a.mockapi.io';

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getCoursesFromApi().pipe(
          map(data => CourseActions.loadCoursesSuccess({ data })),
          catchError(error => of(CourseActions.loadCoursesFailure({ error }))))
      )
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.createCourse),
      concatMap((action) =>
        this.createCourse(action.data).pipe(
          map((response) => CourseActions.createCourseSuccess({ data: response })),
          catchError((error) => of(CourseActions.createCourseFailure({ error })))
        )
      )
    )
  })

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private getCoursesFromApi(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseURL}/courses`)
  }

  private createCourse(data: { title: string }): Observable<Course> {
    return this.httpClient.post<Course>(`${this.baseURL}/courses`, data);
  }
}

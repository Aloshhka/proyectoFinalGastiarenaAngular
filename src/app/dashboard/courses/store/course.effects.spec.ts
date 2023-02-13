import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CourseEffects } from './course.effects';

describe('CourseEffects', () => {
  let actions$: Observable<any>;
  let effects: CourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

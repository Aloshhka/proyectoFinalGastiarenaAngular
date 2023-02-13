import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCourse, loadCourses, resetCourseState } from '../../store/course.actions';
import { Course } from '../../models/course.model';
import { selectCourseState } from '../../store/course.selectors';
import { MatDialog } from '@angular/material/dialog';
import { CourseModalComponent } from '../../components/course-modal/course-modal.component';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'title', 'edit', 'viewDetail', 'delete']
  courses: Course[] = [];
  loading = true;

  constructor(
    private store: Store,
    private readonly dialogService: MatDialog
  ) {
    this.store.dispatch(loadCourses())
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetCourseState());
  }

  ngOnInit(): void {
    this.store.select(selectCourseState)
      .subscribe((state) => {
        this.courses = state.data
        this.loading = state.loading
      })
  }

  createCourse() {
    const dialog = this.dialogService.open(CourseModalComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        // console.log(data);
        this.store.dispatch(createCourse({ data }))
      }
    })
  }
}

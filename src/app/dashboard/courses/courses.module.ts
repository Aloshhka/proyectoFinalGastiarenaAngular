import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/course.effects';
import { StoreModule } from '@ngrx/store';
import { courseFeatureKey, reducer } from './store/course.reducer';
import { MatTableModule } from '@angular/material/table';
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseDetailPageComponent,
    CourseModalComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    StoreModule.forFeature(courseFeatureKey, reducer),
    EffectsModule.forFeature([CourseEffects]),
  ]
})
export class CoursesModule { }

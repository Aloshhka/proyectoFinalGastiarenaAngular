import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/course.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent {
  public titleControl = new FormControl('', [Validators.required]);
  public courseForm = new FormGroup({
    title: this.titleControl,
  })

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Course | undefined,
  ) {
    if (data) {
      this.courseForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close()
  }
}

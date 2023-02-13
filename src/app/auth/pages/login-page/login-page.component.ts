import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subject, filter, take, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public loading = false
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  })
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  login() {
    this.loading = true
    this.authService.login({
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
    })
    this.router.navigate(['dashboard', 'students'])
    this.authService.isAuthenticated$
      .pipe(filter((value) => value))
      .pipe(take(1))
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['dashboard', 'students']);
        }
      });
  }
}

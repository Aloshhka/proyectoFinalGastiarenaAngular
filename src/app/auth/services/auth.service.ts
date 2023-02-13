import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logOut, login, verifyToken } from 'src/app/auth/store/auth.actions';
import { AppState } from 'src/app/core/models/app-state.model';
import { selectIsAuthenticated, selectLoggingIn } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  public isAuthenticated$: Observable<boolean>;
  public loggingIn$: Observable<boolean>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.loggingIn$ = this.store.select(selectLoggingIn);
  }

  login(data: { email: string; password: string }): void {
    this.store.dispatch(login({ email: data.email, password: data.password }));
  }

  logOut() {
    this.store.dispatch(logOut())
    this.router.navigate(['auth', 'login']);
  }

  verifyToken() {
    this.store.dispatch(verifyToken({ token: localStorage.getItem('token') || '' }))
  }
}

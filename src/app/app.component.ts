import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afterclass-6-modulos-apuntes';
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.verifyToken()
  }
}

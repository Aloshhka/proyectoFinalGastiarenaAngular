import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';
import { authenticatedUserSelector } from 'src/app/auth/store/auth.selectors';
import { AppState } from 'src/app/core/models/app-state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Output() toggleSidebar = new EventEmitter()
  public user: Observable<User | null>;
  constructor(public readonly authService: AuthService, private readonly store: Store<AppState>) {
    this.user = this.store.select(authenticatedUserSelector)
  }
  ngOnDestroy(): void {}
}

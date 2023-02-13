import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AuthStoreModule } from './auth/auth-store.module';
import { UsersStoreModule } from './dashboard/users/users-store.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    AuthStoreModule,
    UsersStoreModule,
  ]
})
export class AppStoreModule { }

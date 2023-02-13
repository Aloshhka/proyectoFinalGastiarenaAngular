import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthStoreModule { }

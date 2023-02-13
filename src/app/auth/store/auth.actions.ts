import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const login = createAction('[AUTH] LOGIN', props<{ email: string; password: string; }>());
export const loginSuccess = createAction('[AUTH] LOGIN SUCCESS', props<{ authenticatedUser: User }>());
export const loginFailure = createAction('[AUTH] LOGIN FAILURE', props<{ error: unknown }>());

export const verifyToken = createAction('[AUTH] VERIFY TOKEN', props<{ token: string; }>());
export const verifyTokenSuccess = createAction('[AUTH] VERIFY TOKEN SUCCESS', props<{ authenticatedUser: User }>());
export const verifyTokenFailure = createAction('[AUTH] VERIFY TOKEN FAILURE', props<{ error: unknown }>());


export const logOut = createAction('[AUTH] LOG OUT');
export const updateAuthenticatedUser = createAction(
  '[AUTH] UPDATE USER',
  props<{ first_name: string; last_name: string }>()
)

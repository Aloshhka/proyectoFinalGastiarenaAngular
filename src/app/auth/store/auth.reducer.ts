import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { logOut, login, loginFailure, loginSuccess, updateAuthenticatedUser, verifyToken, verifyTokenFailure, verifyTokenSuccess } from "./auth.actions";
import { state } from "@angular/animations";

export const authFeatureKey = 'auth'

export interface AuthState {
    authenticatedUser: User | null;
    loggingIn: boolean;
    error: unknown;
}

const initialState: AuthState = {
    authenticatedUser: null,
    loggingIn: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({ ...state, loggingIn: true })),
    on(loginSuccess, (state, { authenticatedUser }) => ({ ...state, authenticatedUser, loggingIn: false })),
    on(loginFailure, (state, { error }) => ({ ...state, loggingIn: false, error })),

    on(verifyToken, (state) => ({ ...state, loggingIn: true })),
    on(verifyTokenSuccess, (state, { authenticatedUser }) => ({ ...state, authenticatedUser, loggingIn: false })),
    on(verifyTokenFailure, (state, { error }) => ({ ...state, loggingIn: false, error })),
    on(logOut, () => {
      localStorage.removeItem('token');
      return initialState;
    }),
    on(updateAuthenticatedUser, (oldState, payload) => {
        if (!oldState.authenticatedUser) return oldState;
        return {
            ...oldState,
            authenticatedUser: new User(
                oldState.authenticatedUser.id,
                oldState.authenticatedUser.email,
                payload.first_name || oldState.authenticatedUser.first_name,
                payload.last_name || oldState.authenticatedUser.last_name,
                oldState.authenticatedUser.avatar
            )
        }
    })
);

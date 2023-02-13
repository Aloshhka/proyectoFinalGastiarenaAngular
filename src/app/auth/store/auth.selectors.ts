import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/models/app-state.model";

export const authStateSelector = (appState: AppState) => appState.auth;
export const authenticatedUserSelector = createSelector(
    authStateSelector,
    (authState) => authState.authenticatedUser
);

export const selectIsAuthenticated = createSelector(
  authStateSelector,
  (state) => !!state.authenticatedUser
);

export const selectLoggingIn = createSelector(
  authStateSelector,
  (state) => state.loggingIn
)

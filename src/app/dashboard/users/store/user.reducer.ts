import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../models/user.model';

export const userFeatureKey = 'user';

export interface State {
  data: User[];
  totalUsers: number;
}

export const initialState: State = {
  data: [],
  totalUsers: 0,
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      totalUsers: action.totalUsers,
    }
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),

);

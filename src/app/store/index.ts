import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomerSuport from './reducers/customer-suport.reducer';
import * as fromAuth from './reducers/auth.reducer';


export interface AppState {
  [fromCustomerSuport.customerSuportFeatureKey]: fromCustomerSuport.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCustomerSuport.customerSuportFeatureKey]: fromCustomerSuport.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

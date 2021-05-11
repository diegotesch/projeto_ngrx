import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomerSuport from './redurecrs/customer-suport.reducer';


export interface AppState {
  [fromCustomerSuport.customerSuportFeatureKey]: fromCustomerSuport.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCustomerSuport.customerSuportFeatureKey]: fromCustomerSuport.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerSuportFeatureKey, State } from '../redurecrs/customer-suport.reducer';

export const selectCustomerSupportFeature = createFeatureSelector<State>(
  customerSuportFeatureKey
);

export const selectName = createSelector(
  selectCustomerSupportFeature,
  (state: State) => state.name
);

export interface CustomerSupportViewModel {
  name: string;
  isSentSuccess: boolean;
}

export const selectCustomerSupportModel = createSelector(
  selectCustomerSupportFeature,
  (state: State): CustomerSupportViewModel => {
    const { name, isSentSuccess} = state;
    return {
      name,
      isSentSuccess
    }
  }
);

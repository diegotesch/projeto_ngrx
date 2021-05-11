import { sendingCustomerSupportMessage } from './../actions/customer-support.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const customerSuportFeatureKey = 'customerSuport';

export interface State {
  name: string;
}

export const initialState: State = {
  name: null,
};


export const reducer = createReducer(
  initialState,
  on(sendingCustomerSupportMessage, (state, action) => (
    {
      ...state,
      name: action.data.name
    }
  ))
);


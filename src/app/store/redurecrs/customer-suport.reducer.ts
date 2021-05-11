import * as fromSupportActions from './../actions/customer-support.actions';
// import { sendingCustomerSupportMessage, sendMessageStatus } from './../actions/customer-support.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const customerSuportFeatureKey = 'customerSuport';

export interface State {
  name: string;
  isSentSuccess: boolean | null;
}

export const initialState: State = {
  name: null,
  isSentSuccess: null,
};


export const reducer = createReducer(
  initialState,
  on(
    fromSupportActions.sendingCustomerSupportMessage,
    (state, action) => ({
      ...state,
      name: action.data.name,
    })
  ),
  on(
    fromSupportActions.sendMessageStatus,
    (state, action) => ({
      ...state,
      isSentSuccess: action.isSentSuccess,
    })
  )
);


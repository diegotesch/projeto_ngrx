import { CustomerMessage } from './../../shared/models/customer-message';
import { createAction, props } from '@ngrx/store';

export const sendingCustomerSupportMessage = createAction(
  '[Customer Support Component] Sending Customer Support Message',
  props<{data: CustomerMessage}>()
);

export const sendMessageStatus = createAction(
  '[Customer Support Effect] Sending Customer Message Status',
  props<{isSentSuccess: boolean}>()
);

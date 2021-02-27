import { action } from 'typesafe-actions';
import { UserActions, UserData } from './types';

export const sign_in = (data: UserData) => action(UserActions.SIGN_IN, data);
export const sign_out = () => action(UserActions.SIGN_OUT);

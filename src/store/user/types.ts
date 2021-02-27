export enum UserActions {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export interface UserData {
  token: string;
  name: string;
  login: string;
}

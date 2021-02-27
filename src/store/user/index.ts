import { Reducer } from 'redux';
import { UserActions, UserData } from './types';

const reducer: Reducer<UserData | null> = (state = null, action) => {
  switch (action.type) {
    case UserActions.SIGN_IN:
      const userToBeInserted = action.payload as UserData;

      return userToBeInserted;

    case UserActions.SIGN_OUT:
      return null;
    default:
      return state;
  }
};

export default reducer;

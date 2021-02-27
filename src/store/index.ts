import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';
import { UserData } from './user/types';

export interface ApplicationStore {
  user: UserData | null;
}

const store: Store<ApplicationStore> = createStore(rootReducer);

export default store;

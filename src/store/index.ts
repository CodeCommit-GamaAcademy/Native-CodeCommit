import { createStore, Store } from 'redux';
import { AppData } from './app/types';
import rootReducer from './rootReducer';
import { UserData } from './user/types';

export interface ApplicationStore {
  user: UserData | null;
  app: AppData
}

const store: Store<ApplicationStore> = createStore(rootReducer);

export default store;

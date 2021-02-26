import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';

interface ApplicationStore {

}

const store: Store<ApplicationStore> = createStore( rootReducer );

export default store;
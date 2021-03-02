import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from 'jwt-decode';
import store from '../store';
import { sign_in, sign_out } from '../store/user/actions';

type updateStoreType = () => Promise<boolean>

const updateStore: updateStoreType = async () => {
    const fullToken = await AsyncStorage.getItem('@token_user');
    const username = await AsyncStorage.getItem('@user_name');

    if ( !fullToken || !username ) {
        await AsyncStorage.removeItem('@token_user');
        await AsyncStorage.removeItem('@user_name');

        store.dispatch(sign_out());

        return false;
    }

    const token = fullToken.split(' ')[1];

    const { sub } = jwt(token) as { sub: string };

    store.dispatch(sign_in({
        login: sub,
        name: username,
        token: fullToken,
    }));

    return true;
}

export default updateStore;
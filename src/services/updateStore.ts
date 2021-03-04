import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from 'jwt-decode';
import store from '../store';
import { sign_in, sign_out } from '../store/user/actions';

type updateStoreType = () => Promise<boolean>

const updateStore: updateStoreType = async () => {
    const fullToken = await AsyncStorage.getItem('@token_user');
    const userdataStr = await AsyncStorage.getItem('@user_data') ?? '';

    if ( !fullToken || !userdataStr ) {
        await AsyncStorage.removeItem('@token_user');
        await AsyncStorage.removeItem('@user_data');

        store.dispatch(sign_out());

        return false;
    }

    const token = fullToken.split(' ')[1];

    const { sub } = jwt(token) as { sub: string };

    store.dispatch(sign_in({
        login: sub,
        name: JSON.parse(userdataStr).name,
        token: fullToken,
        cpf: JSON.parse(userdataStr).cpf
    }));

    return true;
}

export default updateStore;
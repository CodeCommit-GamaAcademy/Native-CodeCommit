import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenPayload } from '../types/user';
import jwt from 'jwt-decode';
import updateStore from "./updateStore";

const ValidateCurrentToken = async () => {
    const localToken = await AsyncStorage.getItem('@token_user');
    if ( !localToken ) {
        await updateStore();
        return;
    }

    const onlyToken = localToken.split(' ')[1];
    const tokenPayload = jwt( onlyToken ) as TokenPayload;
    
    const expSeconds = tokenPayload.exp;
    const nowSeconds = Date.now() / 1000;

    if ( expSeconds < nowSeconds ) {
        await AsyncStorage.removeItem('@token_user');
        await AsyncStorage.removeItem('@user_data');
        
        await updateStore();

        return;
    }

    await updateStore();
}

export default ValidateCurrentToken;
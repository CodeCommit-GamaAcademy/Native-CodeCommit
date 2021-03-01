import { useNavigation } from "@react-navigation/native";
import updateStore from "./updateStore";
import ValidateCurrentToken from "./ValidateCurrentToken";

const useChangeIfNotAuth = async () => {
    await ValidateCurrentToken();
    const isLogged = updateStore();

    const navigation = useNavigation();

    if ( !isLogged ) navigation.navigate('Login');
};

export default useChangeIfNotAuth;
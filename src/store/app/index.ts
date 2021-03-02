import { Reducer } from "redux";
import { AppActions, AppData } from "./types";

const INITIAL_STATE: AppData = {
    currentScreen: 'Login'
}

const reducer: Reducer<AppData> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AppActions.SET_CURRENT_SCREEN:
            const screenName = action.payload as string;

            return { ...state, currentScreen: screenName };

        default:
            return state;
    }
}

export default reducer;
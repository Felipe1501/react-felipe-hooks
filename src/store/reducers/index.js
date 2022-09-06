import { numberReducer } from "./number";
import { userReducer } from "./login";

export function reducer(state, action){
    let newState = numberReducer(state, action);
    return userReducer(newState, action)

}
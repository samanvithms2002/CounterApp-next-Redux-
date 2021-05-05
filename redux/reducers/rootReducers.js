import counterReducer from "./counterReducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    counter:counterReducer
});

export default rootReducers;
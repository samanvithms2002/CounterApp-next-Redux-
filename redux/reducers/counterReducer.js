import {increment_counter,decrement_counter,reset_counter} from "../actions/counterActions"

const constReducer =(state = {value:0},action)=>{
    switch(action.type){
        case increment_counter:
            return{...state,value: state.value+1};
        case decrement_counter:
            return {...state, value:state.value-1};
        case reset_counter:
            return{...state,value:0};
        default:
            return {...state};
    }
    
};
export default constReducer;
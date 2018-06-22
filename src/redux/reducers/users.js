import {combineReducers} from 'redux'


function array(state=[], action){
    switch(action.type){
        case "ADD":
            return [...state, action.item]
        case "REMOVE":
            return [...state.filter(i=>i.id!==action.item.id)]
        case "UPDATE":
            return [...state.map(i=>{
                if(i.id===action.item.id)return action.item
                return i;
            })]
        case "GET":
        
        default: return state
    }
}

export const users = combineReducers({
    array,

})
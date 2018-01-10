import {initialState} from '../initialState';


export const chatOpenReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'openChatArea':
            return Object.assign({}, state, {chatOpen:true});
        default:
            return state;
    }
};
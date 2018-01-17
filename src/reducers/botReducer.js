
export const botReducer = (state=[], action) => {
    switch(action.type){
        case 'requestCall':
            return [
                ...state,
                {   id:action.id,
                    send:action.send,
                    result:action.result,
                    timestamp:action.timestamp,
                    action:action.action,
                }

            ];

        default:
            return state;
    }
};
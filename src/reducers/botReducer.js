
export const botReducer = (state=[], action) => {
    switch(action.type){
        case 'requestCall':
            return [
                ...state,
                {   id:action.id,
                    responsePromise:action.dialogResponse
                }

            ];

        default:
            return state;
    }
};
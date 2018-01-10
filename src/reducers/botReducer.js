
export const botReducer = (state={}, action) => {
    switch(action.type){
        case 'requestCall':
            return [
                ...state,
                {
                    id: action.id,
                    chatOpen:true,
                    request: action.request,
                    responsesPromise: action.client.textRequest(action.request)
                        .then((response) => {
                            return [response.result.fulfillment.speech, response.result.action, response.result.parameters];
                        })
                        .catch((error) => {}),
                }

            ];
        default:
            return state;
    }
};
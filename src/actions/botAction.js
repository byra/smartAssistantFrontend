import {ApiAiClient} from 'api-ai-javascript';
import {v4} from 'node-uuid';


const client =  new ApiAiClient({accessToken: 'd0715c31d29d423c94c946875d132b95'});


export const botAction = (request) => {
    return{
        type:'requestCall',
        id:v4(),
        dialogResponse: client.textRequest(request)
    };
};
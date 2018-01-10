import {ApiAiClient} from 'api-ai-javascript';


let chatId = 0;
const client =  new ApiAiClient({accessToken: 'd0715c31d29d423c94c946875d132b95'});


export const botAction = (request) => {
    return{
        type:'requestCall',
        id:chatId++,
        client:client,
        request:request
    };
};
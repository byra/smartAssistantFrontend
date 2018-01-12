import React from "react";
import "../styles/bot.css";

export const Messages = (props) =>{
    if(Object.keys(props.responsePromise).length === 0){
        return null;
    }
    else{
        let chatMessages = [];
        for(let res of props.responsePromise){
            res.responsePromise.then(response =>{
                chatMessages.push({
                    send: response.result.resolvedQuery,
                    result: response.result.fulfillment.speech,
                    timestamp:response.timestamp,
                    action:response.result.action
                });
                display(chatMessages);
            })
        }
        return null;
    }
};

const display = messages =>{
    let htmlMessages = '';
    let node = document.getElementById('bodyMessages');
    for(let message of messages){
        htmlMessages += '<div>';
        htmlMessages += '<p class = "requestMessage"><span class="messageData">'+ message.send+'</span></p>';
        htmlMessages += '<br>';
        htmlMessages += '<br>';
        htmlMessages += '<p class = "receivedMessage"><span class="messageData">'+  message.result+'</span></p>';
        htmlMessages += '<br>';
        htmlMessages += '<br>';
        htmlMessages += '</div>';
    }
    node.innerHTML = htmlMessages;
    node.scrollTop = node.scrollHeight;
};
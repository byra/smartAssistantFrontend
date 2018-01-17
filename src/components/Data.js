import React from "react";
import fetch from "cross-fetch";
import tableify from "tableify";

export const Data = (props)=>{
    if(props.responses.length>0){
        let action = props.responses[props.responses.length-1].action;
        if(action !== ''&& action !== 'input.unknown' && action.search("smalltalk.") !== 0){
            if(action ==='clear_screen'){
                document.getElementById("dataArea").innerText="";
                return null;
            }
            return <DataFormat action = {props.responses[props.responses.length-1].action}/>;
        }
    }
    return null;
};


const DataFormat = (props)=>{

    let dataPromise = fetch("http://34.209.27.55:3030/"+ props.action)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return(res.json());
        });
    dataPromise.then((response)=>{
        var html = tableify(response);
        document.getElementById("dataArea").insertAdjacentHTML("beforeend", html);
    });
    return null;
};


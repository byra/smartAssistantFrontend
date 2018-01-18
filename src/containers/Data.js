import React from "react";
import {Component} from "react";
import {connect} from 'react-redux'
import fetch from "cross-fetch";
import tableify from "tableify";

class Data extends Component{
    constructor(props){
        super(props);
        this.state = {
                    data:null,
        }
    }

    componentWillReceiveProps(nextProps){
        let responseArray = nextProps.lastResponse;
        let len = responseArray.length-1;
        if(len > -1){
            if(responseArray[len].actionChange){
                fetch("http://34.209.27.55:3030/"+ responseArray[len].action)
                    .then(res => {
                        if (res.status >= 400) {
                            throw new Error("Bad response from server");
                        }
                        return res.json();
                    })
                    .then(data => {
                        this.setState({data:data});
                    })
                    .catch(err => {
                        console.error(err);
                    });


            }
        }
    }

    render(){
        let dataFormat = tableify(this.state.data);
        return(<div className="dataArea">{dataFormat}</div>);
    }
}

const mapStateToProps = state => {
    return {
        lastResponse: state.botReducer
    };
};

export default connect(
    mapStateToProps
)(Data);


// export const Data = (props)=>{
//     this.state({temp:"dummy"});
//
//     debugger;
//     return <div>{this.state.temp}</div>;
// };
//
//
// const DataFormat = (props)=>{
//
//     let dataPromise = fetch("http://34.209.27.55:3030/"+ props.action)
//         .then(res => {
//             if (res.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//             return(res.json());
//         });
//     dataPromise.then((response)=>{
//         let html = tableify(response);
//         document.getElementById("dataArea").innerHTML = "";
//         document.getElementById("dataArea").insertAdjacentHTML("beforeend", html);
//     });
//     return null;
// };



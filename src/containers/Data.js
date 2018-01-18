import React from "react";
import {Component} from "react";
import {connect} from 'react-redux'
import fetch from "cross-fetch";
import {DisplayTable} from "../components/DisplayTable";

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
        if(responseArray[len].action!=="clear_screen"){
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
        }else{
            this.setState({data:null});
        }

    }

    render(){
        console.log(this.state.data);
        if(this.state.data === null){
            return null;
        }
        return(<DisplayTable data = {this.state.data}/>);
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



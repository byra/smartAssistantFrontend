import React from 'react';
import {Component} from 'react';


class DisplayTable extends Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props);
        return(<p>hi</p>);
    }
}

export default DisplayTable;
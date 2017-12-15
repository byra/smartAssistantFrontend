import React, {Component} from 'react';
import icon from './../images/Tina_bot.png';
import './../styles/bot.css';

class Bot extends Component{
    render(){
        return(
            <div className="Bot" data-spy="affix">
                <img src={icon} className="Bot-icon" alt="icon"/>
            </div>
        );
    }
}

export default Bot;
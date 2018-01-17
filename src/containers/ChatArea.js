import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'
import MdMin from 'react-icons/lib/md/remove';
import {botAction} from '../actions/botAction';
import {botMinimizeAction} from '../actions/chatOpenAction'
import {ChatMessages} from "../components/ChatMessages";
import "../styles/bot.css";
import {Data} from "../components/Data";

class ChatArea extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let request = '';

        const updateScroll = ()=>{
            let element =  document.getElementById("chatBody");
            element.scrollTop = element.clientHeight;
        };

        return (
            <div>
                <div className="bot">
                    <div className='headerData'>
                        <div className='headerName'>
                            Tina
                        </div>
                        <div className='headerClose' onClick={() => this.props.minimizeChatArea()}>
                            <MdMin/>
                        </div>
                    </div>

                    <div className="body">
                        <ChatMessages responses={this.props.responses}/>
                    </div>

                    <div className='footer'>
                        <input className="footerChatInput"
                               ref={
                                   node => {
                                       request = node
                                   }
                               }
                               placeholder="Say Hi!!!"
                               onKeyPress={
                                   (event) => {
                                       if (event.key === 'Enter' && request.value.trim() !== '') {
                                           this.props.fetchResponse(request.value.trim());
                                           request.value = '';
                                       }
                                   }
                               }
                        />
                    </div>
                </div>
                {
                    updateScroll()
                }
                <Data responses={this.props.responses}/>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        responses: state.botReducer

    };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchResponse: (request) => dispatch(botAction(request)),
        minimizeChatArea: () => dispatch(botMinimizeAction())
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatArea)

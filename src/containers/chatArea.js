import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'
import MdMin from 'react-icons/lib/md/remove';
import {botAction} from '../actions/botAction';
import {botMinimizeAction} from '../actions/chatOpenAction'
import {Messages} from "../components/messages";
import "../styles/bot.css";


class ChatArea extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let request = '';
        return (
            <div className="bot">
                <div className='headerData'>
                    <div className='headerName'>
                        Tina
                    </div>
                    <div className='headerClose' onClick={() => this.props.minimizeChatArea()}>
                        <MdMin/>
                    </div>
                </div>

                <div className='body'>
                    <div id='bodyMessages'>
                        <Messages responsePromise={this.props.responses}/>
                        {/*Messages will be loaded here*/}
                    </div>
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

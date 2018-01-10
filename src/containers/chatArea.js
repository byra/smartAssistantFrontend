import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'
import MdMin from 'react-icons/lib/md/remove';
import {botAction} from '../actions/botAction';
import {botMinimizeAction} from '../actions/chatOpenAction'


class ChatArea extends Component {


    render() {
        let request;

        let ChatMessages = ()=>{
            if(Object.keys(this.props.responses).length === 0){
                return null;
            }
            else{
                let  messages='';
                for(let response of this.props.responses){
                    console.log(Promise.resolve(response.responsesPromise));
                    messages += response.request + response.responsesPromise.result;
                }
                return(messages);

            }
        };

        return (
            <table className="table-space ">
                <thead>
                <tr>
                    <th className='table-header'>
                        <div className='header-name'>
                            Tina
                        </div>
                        <div className='header-close' onClick={() => this.props.minimizeChatArea()}>
                            <MdMin/>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody className='table-body' id='chat-table'>
                <ChatMessages/>
                <tr>
                    <td>
                        <input className="chat-input"
                               ref={node => {
                                   request = node
                               }
                               }
                               placeholder="Say Hi!!!"
                               onKeyPress={(event) => {
                                   if (event.key === 'Enter') {
                                       this.props.fetchResponse(request.value.trim());
                                       request.value = '';
                                   }
                               }
                               }
                        />
                    </td>
                </tr>
                </tbody>
                <tfoot className='table-footer'>

                </tfoot>
            </table>

        )
    }
}


const mapStateToProps = state => {
    console.log(Object.keys(state.botReducer).length);
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

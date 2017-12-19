import React, {Component} from 'react';
import MdChatBubble from 'react-icons/lib/md/chat-bubble';
import MdClose from 'react-icons/lib/md/close';
import './../styles/bot.css';
//import  {dialogflow} from 'dialogflow';


class Bot extends Component{

    constructor(props){
        super(props);
        this.openChat = this.openChat.bind(this);
        this.closeChat = this.closeChat.bind(this);
        this.processRequest = this.processRequest.bind(this);
        this.state = {
            isChatOpen:false,
            query:'hello',
            projectId: 'tina-904de',
            sessionId: '2fa3bcb5-3d9f-48df-b045-78552abdedb1',
            languageCode: 'en-US',


        };
    }

    openChat(){
        this.setState({isChatOpen:true});

    }

    closeChat(){
        this.setState({isChatOpen:false});
    }

    processRequest(e){
        if (e.key === 'Enter') {
            const sessionClient = new dialogflow.SessionsClient();
            const sessionPath = sessionClient.sessionPath(this.state.projectId, this.state.sessionId);
            const request = {
                session: sessionPath,
                queryInput: {
                    text: {
                        text: this.state.query,
                        languageCode: this.state.languageCode,
                    },
                },
            };

            sessionClient
                .detectIntent(request)
                .then(responses => {
                    console.log('Detected intent');
                    const result = responses[0].queryResult;
                    console.log(`  Query: ${result.queryText}`);
                    console.log(`  Response: ${result.fulfillmentText}`);
                    if (result.intent) {
                        console.log(`  Intent: ${result.intent.displayName}`);
                    } else {
                        console.log(`  No intent matched.`);
                    }
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });

        }
    }

    render(){
        const isOpen = this.state.isChatOpen;
        let display = null;
        if(isOpen){
            display = <table className="table-space ">
                <thead>
                    <tr>
                        <th className='table-header'><div className='header-name'>Tina</div><div className='header-close' onClick={this.closeChat}><MdClose/></div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input className='chat-input' value={this.state.requestText} placeholder={'Say Hello'} onKeyPress={this.processRequest}/>
                        </td>
                    </tr>
                </tbody>
                <tfoot className='table-footer'></tfoot>
            </table>;
        }
        else{
            display = <div onClick={this.openChat}><MdChatBubble className="Bot-icon"/></div>;
        }
        return(
            <div className="Bot" data-spy="affix">
                {display}
            </div>
        );
    }
}

export default Bot;
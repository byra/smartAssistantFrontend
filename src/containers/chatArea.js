import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'
import MdMin from 'react-icons/lib/md/remove';
import {botAction} from '../actions/botAction';


class ChatArea extends Component {


    render() {
        //var request="hi";
        return (
            <table className="table-space ">
                <thead>
                <tr>
                    <th className='table-header'>
                        <div className='header-name'>
                            Tina
                        </div>
                        <div className='header-close'>
                            <MdMin/>
                        </div>
                    </th>
                </tr>
                </thead>
                <div>
                    <tbody className='table-body' id='chat-table'>
                    <tr>
                        <td>
                            <input className = "chat-input" ref={node => {
                                request = node
                            }}
                                   placeholder = "Say Hi!!!"
                                   // onKeyPress={(event) =>{
                                   //     if (event.key === 'Enter'){
                                   //         this.props.fetchResponse(request)
                                   //     }}
                                   // }
                            />
                        </td>
                    </tr>
                    </tbody>
                </div>
                <tfoot className='table-footer'>

                </tfoot>
            </table>

        )
    }
}


const mapStateToProps = state => {
    return{

    }
};


const mapDispatchToProps = dispatch => {
    return{
        fetchResponse: (request) => dispatch(botAction(request))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatArea)

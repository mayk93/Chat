/**
 * Created by Michael on 09/12/16.
 */

/**
 * Created by Michael on 03/07/16.
 */

/* React */
import React, {Component} from 'react';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import { process_text } from '../actions/index';


class ChatApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            last_response: "",
            last_input: "",
            conversation: ["Hello!"],
            endpoint: "/process_text/"
        };
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Will update np: ", nextProps);
        console.log("Will update np: ", nextState);
    }

    render() {
        console.log("Rendering with state: ", this.state);
        return (
            <div>
                <div className="jumbotron">
                    <div className="center">
                        <div className="chatBox" id="conversation_text_area" ref="conversation_text_area">
                            { this.state.conversation.join("\n") }
                        </div>
                        <br></br>
                        <textarea className="form-control chatBoxColor" rows="3"
                                  id="input_text_area" ref="input_text_area">
                        </textarea>
                        <div className="center_button">
                            <button className="buttonStyle"
                                    onClick={() => {
                                        var new_input = this.refs.input_text_area.value;
                                        this.setState({
                                            last_input: new_input,
                                            conversation: this.state.conversation.concat([new_input])
                                        }, () => {this.refs.input_text_area.value = "";});
                                    }}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <div className="well">
                    Endpoint: {this.state.endpoint}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        text_process: state.text_process
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ process_text }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
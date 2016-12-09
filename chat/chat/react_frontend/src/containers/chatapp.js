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



class ChatApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                        <textarea readOnly={true} className="form-control" rows="10" id="conversation_text_area">
                        </textarea>
                        <br></br>
                        <textarea className="form-control" rows="3" id="input_text_area">
                        </textarea>
                        <div className="center_button">
                            <button className="buttonStyle"
                                    onClick={() => {
                                        this.setState({});
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
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
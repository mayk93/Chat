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
                    <div></div>
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
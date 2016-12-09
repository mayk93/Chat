/**
 * Created by Michael on 03/07/16.
 */

/* React */
import React, {Component} from 'react';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components and Containers */
import ChatApp from './chatapp';

class AppBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.current_view == "chat_app") {
            return (
                <ChatApp />
            );
        }

    }
}

function mapStateToProps(state) {
    return {
      current_view: state.current_view
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
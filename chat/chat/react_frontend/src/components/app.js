/**
 * Created by Michael on 08/12/16.
 */


import React, {Component} from 'react';

/* Components and Containers */
import AppBody from '../containers/body';

export default class App extends Component {
    constructor(props) {
        
        super(props);
    }

    render() {
        return (
            <div>
                <p>The app works!</p>
            </div>
        );
    }
}
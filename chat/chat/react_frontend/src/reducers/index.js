import {combineReducers} from 'redux';

import CurrentViewReducer from './reducer_current_view';
import TextProcessReducer from './reducer_text_process';

const rootReducer = combineReducers({
    current_view: CurrentViewReducer,
    text_process: TextProcessReducer,
});

export default rootReducer;

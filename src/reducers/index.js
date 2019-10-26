import { combineReducers } from 'redux';
import ReducerKeynote from './reducer_keynote';

const rootReducer = combineReducers({
    list: ReducerKeynote
});

export default rootReducer;
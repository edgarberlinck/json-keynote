import {
    LIST_KEYNOTES
} from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case LIST_KEYNOTES: return action.payload.data;
        default: return state;
    }
}
import { Map } from 'immutable';
import ACTIONS from '../data/SignupConstants';

const InitialState = new Map({
    step: "intro",
    ended: false,
});

function SignupChurchReducer(state = InitialState, action) {
    switch (action.type) {
        case ACTIONS.LEAVE_PAGE: {
            state = state.set('step', action.payload);
            return state;
        }
        case ACTIONS.RESET_PAGE: {
            state = state.set('step', action.payload);
            return state;
        }
        case ACTIONS.GO_TO_END: {
            state = state.set('ended', true);
            return state;
        }
        default: {
            return state;
        }
    }
}

export default SignupChurchReducer;

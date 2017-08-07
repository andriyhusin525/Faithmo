import { Map } from 'immutable';
import ACTIONS from '../data/SignupConstants';

const InitialState = new Map({
    step: "intro",
    ended: false,
    success_church_signup: false,
});

function SignupChurchReducer(state = InitialState, action) {
    switch (action.type) {
        case ACTIONS.SUCCESS_SIGNUP_CHURCH_REGISTRATION: {
            state = state.set("success_church_signup", true);
            return state;
        }
        case ACTIONS.BAD_REQUEST: {
            state = state.set("error_messages", action.payload);
            return state;
        }
        case ACTIONS.RECAPTCHA_TOKEN_EXPIRED: {
            state = state.set("error_messages", action.payload);
            return state;
        }
        case ACTIONS.RECAPTCHA_IS_NOT_CONFIRMED: {
            state = state.set("error_messages", action.payload);
            return state;
        }
        case ACTIONS.CHANGE_INPUT_VAL: {
            state = state.set(action.input_type, action.payload);
            return state;
        }
        case ACTIONS.RESET_ERROR_MESSAGES: {
            state = state.set("error_messages", false);
            return state;
        }
        case ACTIONS.SET_ERROR_MESSAGES: {
            state = state.set("error_messages", action.payload);
            for(let key in action.payload) {
                if (action.payload[key] !== false) {
                    state= state.set(key, "");
                }
            }
            return state;
        }
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

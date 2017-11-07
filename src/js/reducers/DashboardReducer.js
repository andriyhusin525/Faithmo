import { Map } from 'immutable';
import ACTIONS from '../data/DashboardConstants';

const InitialState = new Map({
    user_menu: false,
    main_menu: false,
    profile: false,
});

function DashboardReducer(state = InitialState, action) {
    switch (action.type) {
        case ACTIONS.TRIGGER_USER_MENU: {
            state = state.set('user_menu', !state.get('user_menu'));
            return state;
        }
        case ACTIONS.TRIGGER_MAIN_MENU: {
            state = state.set('main_menu', !state.get('main_menu'));
            return state;
        }
        case ACTIONS.TRIGGER_PROGILE_MODAL: {
            state = state.set('profile', !state.get('profile'));
            return state;
        }
        default: {
            return state;
        }
    }
}

export default DashboardReducer;

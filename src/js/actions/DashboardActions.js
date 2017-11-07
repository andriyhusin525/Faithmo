import ACTIONS from '../data/DashboardConstants';

function triggerUserMenu() {
    return {
        type: ACTIONS.TRIGGER_USER_MENU,
    }
}

function triggerMainMenu() {
    return {
        type: ACTIONS.TRIGGER_MAIN_MENU,
    }
}

function triggerProfileModal() {
    return {
        type: ACTIONS.TRIGGER_PROGILE_MODAL,
    }
}
module.exports = {
    triggerUserMenu,
    triggerMainMenu,
    triggerProfileModal
}

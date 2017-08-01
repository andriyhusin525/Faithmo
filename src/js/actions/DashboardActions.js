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

module.exports = {
    triggerUserMenu,
    triggerMainMenu,
}

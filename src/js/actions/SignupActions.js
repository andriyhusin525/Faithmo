import ACTIONS from '../data/SignupConstants';

function leavePage(page) {
    return {
        type: ACTIONS.LEAVE_PAGE,
        payload: page,
    }
}

function goToEnd(ended) {
    return {
        type: ACTIONS.GO_TO_END,
    }
}

function resetPage(ended) {
    return {
        type: ACTIONS.RESET_PAGE,
        payload: ended ? 'end' : 'intro'
    }
}

module.exports = {
    leavePage,
    resetPage,
    goToEnd,
}

import ACTIONS from '../data/SignupConstants';
import axios from 'axios';
import { channelAPI } from '../config';

function changeInputVal(data, type) {
    return {
        type: ACTIONS.CHANGE_INPUT_VAL,
        input_type: type,
        payload: data,
    }
}

function setErrorMessages(messages) {
    return {
        type: ACTIONS.SET_ERROR_MESSAGES,
        payload: messages
    }
}

function resetErrorMessages(messages) {
    return {
        type: ACTIONS.RESET_ERROR_MESSAGES,
    }
}

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

const headers = {
  "Content-Type": "application/json",
}

function submitForm(recaptcha_token, user_data, church_data) {
    if (recaptcha_token) {
        return dispatch => {
            // axios({
            //     method: 'POST',
            //     url: `https://www.google.com/recaptcha/api/siteverify`,
            //     params: {
            //         secret: "6LezASoUAAAAAC5GHmc9KU6ScwKriMJLSyeVBHuF",
            //         response: recaptcha_token
            //     },
            // })
            // .then((response) => {
            //     console.log(response)
            //     if (response.success === true) {
                    let user_endpoint: "users"
                    axios({
                        method: 'POST',
                        url: `${channelAPI}users`,
                        headers,
                        data: user_data,
                    })
                    .then((response) => {
                        if (response.status === 201) {
                            let church_endpoint: "churches"
                            let header = {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + response.data.id_token
                            }
                            axios({
                                method: 'POST',
                                url: `${channelAPI}churches`,
                                headers: header,
                                data: church_data,
                            })
                            .then((response) => {
                                if (response.message) {
                                    dispatch({
                                        type: ACTIONS.BAD_REQUEST,
                                        payload: { "registration" : response.message }
                                    })
                                }
                                else {
                                    dispatch({
                                        type: ACTIONS.SUCCESS_SIGNUP_CHURCH_REGISTRATION,
                                    })
                                }
                            })
                        }
                        else {
                            dispatch({
                                type: ACTIONS.BAD_REQUEST,
                                payload: { "registration" : response.message }
                            })
                        }
                    })
    //             }
    //             else {
    //                 dispatch({
    //                     type: ACTIONS.RECAPTCHA_TOKEN_EXPIRED,
    //                     payload: { "recaptcha" : "Verification expired. Check the checkbox again." }
    //                 })
    //             }
    //         })
        }
    }
    else {
        return {
            type: ACTIONS.RECAPTCHA_IS_NOT_CONFIRMED,
            payload: { "recaptcha" : "Please check recaptcha checkbox." }
        }
    }
}

module.exports = {
    leavePage,
    resetPage,
    goToEnd,
    changeInputVal,
    setErrorMessages,
    resetErrorMessages,
    submitForm,
}

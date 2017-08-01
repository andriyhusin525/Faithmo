import { combineReducers } from "redux"

import signup_church from "./SignupChurchReducer";
import dashboard from "./DashboardReducer";

export default combineReducers({
    signup_church,
    dashboard
})

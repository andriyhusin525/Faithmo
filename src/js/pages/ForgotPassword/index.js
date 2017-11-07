import React from "react";
import { withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../components/Buttons/Button.js';

import './style/ForgotPassword.scss';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrap--signup__church wrap--page">
              <div className={"wrap--signup__step-form "}>
                  <div className="wrap--signup-step--bottom">
                    <span className="back-icon" onClick={()=>{this.props.router.push('/login')}}>
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </span>
                    <div className={"wrap-login-form "}>
                    <div className="box form-title">
                      <i class="fa fa-refresh icon" aria-hidden="true"></i>
                      <div>Reset Password</div>
                    </div>
                    <div className="box">
                      <TextField
                          hintText={'Email address'}
                          hintStyle={{color: "#000"}}
                          className={"form--input w-100"}
                          onChange={(event) => {
                          }}
                          type={'email'}
                      />
                      </div>
                      <div className="box">
                          <Button type="red" text="Submit" class_name="submit-btn"/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        )
    }

}


function stateToProps(state) {
    return {

    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
      // actions will be here
    }, dispatch);
}

export default withRouter(connect(stateToProps, dispatchToProps)(ForgotPassword));

import React from "react"
import { withRouter } from 'react-router';
import TextField from 'material-ui/TextField';
//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../components/Buttons/Button.js';

// style
import './style/Login.scss';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
      this.props.router.push('/dashboard');
    }

    render() {
        return(
            <div className="wrap--signup__church wrap--page">
              <div className={"wrap--signup__step-form auth"}>
                  <div className="wrap--signup-step--bottom">
                    <div className={"wrap-login-form "}>
                    <div className="box form-title">
                      <i class="fa fa-sign-in icon" aria-hidden="true"></i>
                      <div>login</div>
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
                      <TextField
                          hintText={'Password'}
                          hintStyle={{color: "#000"}}
                          className={"form--input w-100"}
                          onChange={(event) => {
                              // this._changeInputVal(event.target.value, val)
                          }}
                          type={'Password'}
                      />
                      </div>
                      <div className="box">
                        <div>
                          <Button type="red" text="Login" class_name="submit-btn" onClick={()=>this.login()}/>
                        </div>
                        <div className="forgot-link">
                          <span onClick={()=>{this.props.router.push('/forgot-password')}}>Forgot Password?</span>
                        </div>
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

export default withRouter(connect(stateToProps, dispatchToProps)(Login));

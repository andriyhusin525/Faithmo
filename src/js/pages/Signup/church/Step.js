import React from "react"

// components
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
var Recaptcha = require('react-recaptcha');
import Button from '../../../components/Buttons/Button.js';

// utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// data
import form_fields from '../../../data/signup-church-form-fields.js';

// actions
import { resetPage, goToEnd } from '../../../actions/SignupActions';

var callback = function () {
  console.log('Done!!!!');
};

class Step extends React.Component {

    constructor(props) {
        super(props);
        this.getStepNumBundle = this.getStepNumBundle.bind(this)
        this.submitForm = this.submitForm.bind(this, this.state)
        this.state = {
            form_submited: false
        }
    }

    componentWillUnmount() {
        if (!this.props.ended) {
            this.props.resetPage()

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ended !== this.props.ended) {
            this.props.resetPage(nextProps.ended)
        }
    }

    submitForm() {
        this.props.goToEnd()
    }

    getStepNumBundle(type) {
        let text = type === "first" ? "Please tell us about your church." : (type === "second" ? "Tell as more!" : "Great! Now let's create your admin account.")
        return <div className={"wrap--step-num " + type}>
            {
                [1, 2, 3].map((val, i) => {
                    return <div className="list-num" key={i}>
                        <p>{val}</p>
                    </div>
                })
            }
            <p className="title--step-num">{text}</p>
        </div>
    }

    getFormBundle(type) {
        let fields = form_fields[type]
        let button_arg = type === "first" ? "second" : "third"
        return <div className={"wrap-form " + type}>
            {
                fields.map((val, i) => {
                    if (val.type === "text") {
                        return <MuiThemeProvider key={i}>
                            <TextField
                                hintText={val.placeholder}
                                hintStyle={{color: "#000"}}
                                className={"form--input " + val.width}
                                key={i}
                            />
                        </MuiThemeProvider>
                    }
                    else if (val.type === "password") {
                        return <MuiThemeProvider key={i}>
                            <TextField
                                hintText={val.placeholder}
                                hintStyle={{color: "#000"}}
                                className={"form--input " + val.width}
                                key={i}
                                type="password"
                            />
                        </MuiThemeProvider>
                    }
                    else if (val.type === "recaptcha") {
                        return <Recaptcha
                            key={i}
                            ref={e => {console.log(e)}}
                            sitekey={val.key}
                            render="explicit"
                            onloadCallback={callback}
                            style="transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;"
                        />
                    }
                    else {
                        return  <MuiThemeProvider key={i}>
                            <div className={"form--select " + val.width}>
                            <SelectField
                                hintText={val.placeholder}
                                fullWidth={true}
                            >
                                <MenuItem value={1} primaryText="Never" />
                                <MenuItem value={2} primaryText="Every Night" />
                                <MenuItem value={3} primaryText="Weeknights" />
                                <MenuItem value={4} primaryText="Weekends" />
                                <MenuItem value={5} primaryText="Weekly" />
                            </SelectField>
                            </div>
                        </MuiThemeProvider>
                    }
                })
            }
            <Button
                type="gradient"
                class_name={"button--signup-" + type + "-step"}
                text={type === "third" ? "Submit" : "Next"}
                fun={type === "third" ? this.submitForm : this.props.fun}
                fun_arg={type === "third" ? null : button_arg}
            />
        </div>
    }

    render() {

        let { type } = this.props

        return(
            <div className={"wrap--signup__step-form " + type}>
                { this.getStepNumBundle(type) }
                <div className="wrap--signup-step--bottom">
                    <div className="wrap--signup-img">
                        <div className="signup-phone"></div>
                    </div>
                    { this.getFormBundle(type) }
                </div>
            </div>
        )

    }

}

function stateToProps(state) {
    return {
        ended: state.signup_church.get('ended'),
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        resetPage,
        goToEnd,
    }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Step);

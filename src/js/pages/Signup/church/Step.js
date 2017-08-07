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
import validation from '../../../utils/validation.js';
import collectFormData from '../../../utils/collect-form-data.js';
import bindFunctions from '../../../utils/bind-functions';
injectTapEventPlugin();

// data
import form_fields from '../../../data/signup-church-form-fields.js';

// actions
import {
    resetPage,
    goToEnd,
    changeInputVal,
    setErrorMessages,
    resetErrorMessages,
    submitForm,
} from '../../../actions/SignupActions';

var callback = function () {
  console.log('Done!!!!');
};

class Step extends React.Component {

    constructor(props) {
        super(props);
        bindFunctions.call(this, ['getStepNumBundle', '_valuesValidation', '_formValidation', '_isNotRobot']);
        this.state = {
            form_submited: false,
            recaptcha_token: false,
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
        if (nextProps.success_church_signup === true && this.props.success_church_signup === false) {
            this.props.goToEnd()
        }
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

    _changeInputVal(data, field) {
        this.props.changeInputVal(data, field.placeholder)
    }

    _valuesValidation(fields) {
        let fields_values = []
        fields.map((field, i) => {
            let placeholder = field.placeholder
            let bundle = {
                type: field.required_type,
                placeholder : placeholder,
                val : this.props.inputs_val.get(placeholder),
                not_required: field.not_required,
            }
            fields_values.push(bundle)
        })
        return validation(fields_values)
    }

    _formValidation() {
        let { type } = this.props
        let fields = form_fields[this.props.type]
        let error = false
        let form_validation = this._valuesValidation(fields)
        for (let key in form_validation) {
            if (form_validation[key] !== false) {
                error = true
            }
        }
        if (error) {
            this.props.setErrorMessages(form_validation)
        }
        else {
            if ( type === "third" ) {
                let user_data = collectFormData("user", this.props.inputs_val)
                let church_data = collectFormData("church", this.props.inputs_val)
                this.props.submitForm(this.state.recaptcha_token, user_data, church_data)
            }
            else {
                this.props.fun(type === "first" ? "second" : "third")
            }
        }
    }

    _isNotRobot(response) {
        this.setState({
            recaptcha_token: response
        })
    }

    getSelectValues(select_val) {
        let val = this.props.inputs_val.get(select_val.placeholder)
        return <SelectField
            hintText={select_val.placeholder}
            fullWidth={true}
            maxHeight={200}
            onChange={(event, index, value) => {
                this._changeInputVal(value, select_val)
            }}
            value={val ? val : ""}
        >
            {
                select_val.values.map((val, i) => {
                    return <MenuItem key={i} value={val} primaryText={val} />
                })
            }
        </SelectField>
    }

    getFormBundle(type) {
        let fields = form_fields[type]
        let button_arg = type === "first" ? "second" : "third"
        return <div className={"wrap-form " + type}>
            {
                fields.map((val, i) => {
                    let inputCurrentVal = this.props.inputs_val.get(val.placeholder)
                    if (val.type === "text" || val.type === "password") {
                        return <MuiThemeProvider key={i}>
                            <TextField
                                hintText={val.placeholder}
                                hintStyle={{color: "#000"}}
                                className={"form--input " + val.width}
                                key={i}
                                onChange={(event) => {
                                    this._changeInputVal(event.target.value, val)
                                }}
                                type={val.type}
                                value={inputCurrentVal ? inputCurrentVal : ""}
                            />
                        </MuiThemeProvider>
                    }
                    else if (val.type === "recaptcha") {
                        return <Recaptcha
                            key={i}
                            ref={e => {console.log(e)}}
                            sitekey={val.key}
                            render="explicit"
                            verifyCallback={this._isNotRobot}
                            onloadCallback={callback}
                            style="transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;"
                        />
                    }
                    else {
                        return  <MuiThemeProvider key={i}>
                            <div className={"form--select " + val.width}>
                            { this.getSelectValues(val) }
                            </div>
                        </MuiThemeProvider>
                    }
                })
            }
            <Button
                type="gradient"
                class_name={"button--signup-" + type + "-step"}
                text={type === "third" ? "Submit" : "Next"}
                fun={ this._formValidation }
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
        inputs_val: state.signup_church,
        success_church_signup: state.signup_church.get('success_church_signup')
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        resetPage,
        goToEnd,
        changeInputVal,
        setErrorMessages,
        submitForm,
    }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Step);

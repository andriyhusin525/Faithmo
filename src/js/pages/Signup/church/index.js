import React from "react"

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import bindFunctions from '../../../utils/bind-functions';

// actions
import { leavePage, resetPage } from '../../../actions/SignupActions';

// components
import Step from './Step'
import Intro from '../../../components/Signup/Intro.js';
import End from '../../../components/Signup/End.js';

// style
import './style/SignupChurch.scss';
import './style/responsive-SignupChurch.scss';

class Church extends React.Component {

    constructor(props) {
        super(props);
        this.getStep = this.getStep.bind(this)
    }

    getStep(step) {
        switch(step) {
            case 'intro': {
                return <Intro fun={this.props.leavePage} arg={"first"}/>
            }
            case 'end' : {
                return <End fun={this.props.leavePage} arg={"intro"} link to={"dashboard"}/>
            }
            default: {
                return <Step type={step} fun={this.props.leavePage} />
            }
        }
    }

    render() {
        return(
            <div className="wrap--signup__church wrap--page">
                { this.getStep(this.props.step) }
            </div>
        )
    }
}


function stateToProps(state) {
    return {
        step: state.signup_church.get('step'),
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        leavePage,
        resetPage
    }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Church);

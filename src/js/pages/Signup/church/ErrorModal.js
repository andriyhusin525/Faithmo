import React from "react"

// actions
import { resetErrorMessages } from '../../../actions/SignupActions';

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// style
import './style/ErrorModal.scss';

class ErrorModal extends React.Component {

    _getErrors(errors) {
        let arr = []
        for (let key in errors) {
            arr.push(errors[key])
        }
            return <ul>
                {
                    arr.map((error, i) => {
                        return error !== false ? <li key={i}>{error}</li> : null
                    })
                }
            </ul>
    }

    render() {

        let { errors_obj } = this.props

        return(
            <div className={"modal-content " + (errors_obj ? 'visible' : 'hidden')}>
                <div className="wrap--content">
                    <h4>Warning</h4>
                    { errors_obj ? this._getErrors(errors_obj) : null }
                </div>
                <div className="wrap--button--exit" onClick={this.props.resetErrorMessages}>
                    <img src="../../images/icons/icon--exit.png" />
                </div>
            </div>
        )

    }

}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        resetErrorMessages
    }, dispatch)
}

export default connect(null, dispatchToProps)(ErrorModal);

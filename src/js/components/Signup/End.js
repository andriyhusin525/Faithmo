import React from "react"

// componets
import Button from '../Buttons/Button.js';

// style
import './style/End.scss';
import './style/responsive-End.scss';

export default class End extends React.Component {

    render() {

        let { arg } = this.props

        return(
            <div className="wrap--signup__step-end">
                <h6 className="step-end--title">{"Thanks! We just sent you a confirmation email."}</h6>
                <p>Just go to your email inbox, look out for the email, ant click on the confirmation link.</p>
                <p>Then your all set! Do keep a look out, because the confirmation  email might end up in your spam folder.</p>
                <div className="wrap--signup-button">
                    <Button type="gradient" text="Ok" class_name="button--signup--end"/>
                </div>
            </div>
        )

    }

}

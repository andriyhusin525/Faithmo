import React from "react"

// style
import './style/Intro.scss';
import './style/responsive-Intro.scss';

// componets
import Button from '../Buttons/Button.js';

export default class Intro extends React.Component {

    render() {

        let { fun, arg } = this.props

        return(
            <div className="wrap--signup__step-one">
                <h6 className="step-one--title">{"Let's sign you up! Please complete all 3 steps."}</h6>
                <div className="wrap--signup-button">
                    <Button type="neutral" text="Get started" class_name="button--signup--intro" fun={fun} fun_arg={arg}/>
                </div>
                <div className="layer--dark"></div>
            </div>
        )

    }

}

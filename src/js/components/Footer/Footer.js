import React from "react"

// style
import './style/Footer.scss';

export default class Footer extends React.Component {

    render() {

        return(
            <div className="component--footer">
                <img className="footer-store androidstore" src="images/androidstore.png" alt=""/>
                <img className="footer-store istore" src="images/istore.png" alt=""/>
            </div>
        )

    }

}

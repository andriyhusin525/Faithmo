import React from "react"
import Button from '../../components/Buttons/Button.js';

export default class AvailableFor extends React.Component {

    render() {
        return(
            <div>
            <div className="home--sec-1">
                <div className="title">Lorem ipsum amet FaithMo.</div>
                <div className="discription">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget felis hendrerit libero faucibus pharetra vitae non risus. Maecenas non tristique nulla,</p>
                </div>
                <div className="image">
                  <img src="images/computers.png" alt="" />
                </div>
            </div>
            <div className="home--sec-2">
                <div className="devider"/>
                <div className="trial-text">Sign up for a no-risk free trial today.</div>
                <div className="trial-btn-container">
                  <Button type="red" text="try faithmo for free" class_name="button"/>
                </div>
                <div className="custom-devider">
                  <div className="devider"/>
                </div>
                <div className="know-more">What to know more?</div>
                <div className="contact">
                  <div className="contact-block">
                    <span className="contact-text">Give us a call at</span>
                    <span className="contact-value">(123)-4561212</span>
                  </div>
                  <div className="contact-block">
                    <span className="contact-text">Send your question to </span>
                    <span className="contact-value">info@fathmo.com</span>
                  </div>
                </div>
            </div>
              <div className="home--sec-3">
                  <div className="discription-part">
                    <h2>Available for:</h2>
                      <div className="icons-style">
                        <i className="fa fa-apple" aria-hidden="true"></i>
                        <span className="and-sign">&</span>
                        <i className="fa fa-android" aria-hidden="true"></i>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget felis hendrerit lebiro fausibus pharetra vitae non rirus. Maecenas non tristique nulla</p>
                    </div>
                    <div className="image">
                      <img src="images/phone_in_hand.png" alt=""/>
                    </div>
              </div>
            </div>
        )
    }
}

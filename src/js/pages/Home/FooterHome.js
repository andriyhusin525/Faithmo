import React from "react"

export default class FooterHome extends React.Component {

    render() {

        return(
            <div className="home--component--footer">
                <div className="footer-box footer-box-1">
                  <div className="title">Links</div>
                  <div className="discription">2014 Pictures</div>
                </div>
                <div className="devider devider-1" />
                <div className="footer-box footer-box-2">
                  <div className="title">Stay Tuned</div>
                  <div className="discription">Connect with us and stay in the loop.</div>
                  <div className="links">
                    <i class="fa fa-twitter social" aria-hidden="true"></i>
                    <i class="fa fa-facebook social" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="devider devider-2" />
                <div className="footer-box footer-box-3">
                  <div className="title">Email Updates</div>
                  <div className="discription">Be the first to here about our offers and announcements.</div>
                  <div className="links">
                    <div className="email-text">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>email</span>
                    </div>
                  </div>
                </div>
                <div className="devider devider-3" />
                <div className="footer-box footer-box-4">
                  <div className="title">Contact Us</div>
                  <div className="discription">Questions? We have got answers. Try us.</div>
                  <div className="links">
                    <div  className="email-us">
                      <span>Email Us</span>
                    </div>
                  </div>
                </div>
            </div>
        )

    }

}

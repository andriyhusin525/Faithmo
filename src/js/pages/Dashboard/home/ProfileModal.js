import React from "react"

// style
import './style/Menu.scss';
import Button from '../../../components/Buttons/Button.js';
// actions
import { triggerProfileModal } from '../../../actions/DashboardActions.js'

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENT
class ProfileModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      shield: false,
    }
    this.showShield = this.showShield.bind(this);
    this.hideShield = this.hideShield.bind(this);
    this.getShield = this.getShield.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }
    showShield(){
      this.setState({
        shield: true,
      });
    }
    hideShield(){
      this.setState({
        shield: false,
      });
    }
    getShield(){
      let user = this.props.data;
      return(
        <div className="wrap--content shield">
          <div className="back" onClick={this.hideShield}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div className="shield-icon">
            <i class="fa fa-shield" aria-hidden="true"></i>
          </div>
          <div className="info">
            <h5 className="name">Position: Paster Deacon Elder</h5>
            <p className="text">Efficiently optimize extensive products whereas end-to-end materials. Objectively promote bricks-and-clicks paradigms rather than functional architectures. Distinctively generate backend outsourcing for distinctive.</p>
          </div>
        </div>
      )
    }
    getProfile(){
      let user = this.props.data;
      return(
        <div className="wrap--content user-profile">
          <div className="id-text">ID# 1234567</div>
          <div className="profile-img" onClick={this.showShield}>
            <img src={user.img} />
            <span className="shield-btn"><i class="fa fa-shield" aria-hidden="true"></i></span>
          </div>
          <div className="wrap--user-info">
              <div style={{marginBottom: "10px"}}>
                <div className="info">
                  <h5 className="name">{user.name}</h5>
                  <span className="date">{"Member Since " + user.date}</span>
                </div>
                <div className="contact">
                  <span><i class="fa fa-mobile icon" aria-hidden="true"></i>(321)234-1212</span>
                  <span><i class="fa fa-phone icon" aria-hidden="true"></i>(234)888-2222</span>
                  <span><i class="fa fa-envelope icon" aria-hidden="true"></i>jdoe@gmail.com</span>
                </div>
              </div>
              <div>
                <div className="text">
                  <p>{user.text+" "+user.text+" "+user.text}</p>
                </div>
                <div className="learn-button">
                  <Button type="neutral" class_name="border--red" text="Learn More" />
                </div>
              </div>
          </div>
        </div>
      )
    }
    render() {
        return (
          <div className="modal-content profile-modal">
              {this.state.shield ? this.getShield() : this.getProfile()}
              <div className="wrap--button--exit" onClick={this.props.onClose}>
                  <img src="../../images/icons/icon--exit.png" />
              </div>
              <div className="triangle"></div>
          </div>
        )

    }

}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        triggerProfileModal,
    }, dispatch)
}

export default connect(null, dispatchToProps)(ProfileModal);

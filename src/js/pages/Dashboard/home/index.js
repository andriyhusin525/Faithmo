import React from "react"

// componets
import Header from '../../../components/Headers/index.js';
import Bundle from '../../../components/Bundle/index.js'
import Modal from '../../../components/Modal/index.js'
import { triggerProfileModal } from '../../../actions/DashboardActions.js'
// style
import './style/Dashboard.scss';
import './style/responsive.scss';

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userData: false,
      openProfile: false
    }
    this.openProfile = this.openProfile.bind(this);
  }
  openProfile(userData){
    this.setState({
      userData,
      openProfile: true
    })
    // console.log('userdata', userdata, this.props);
    this.props.triggerProfileModal();
  }
    render() {

        return(
            <div className="component--dashboard--home wrap--page middle">

                <Header type="dashboard_top"/>
                <Header type="dashboard_sub"/>

                <div className="content">
                    <div className="first-half">
                        <div className="wrap--left">
                            <Bundle type="gifts" size="small" color="light" icon="icon-gift" title="Total Gifts" button={"select"}/>
                            <Bundle type="prayer" size="small" color="light" icon="icon--prayer" title="Prayer Requests (4)" onClick={this.openProfile}/>
                        </div>
                        <div className="wrap--right">
                            <Bundle type="subscribe" size="small" color="dark" title="New Subscribers (4)"/>
                        </div>
                    </div>
                    <div className="second-half">
                        <Bundle type="calendar" size="medium" color="dark" icon="events-calendar--light" title="Events Calendar" button={"add_event"}/>
                    </div>
                </div>

                <Modal type="menu--user" visibility={this.props.user_menu}/>
                <Modal type="menu--main" visibility={this.props.main_menu}/>
                {this.state.userData ?
                  <Modal type="profile" userData={this.state.userData} visibility={this.state.openProfile} onClose={()=>this.setState({openProfile:false})}/>
                  : null}

            </div>
        )

    }

}

// <img src="../../../images/dashboard.png" />

function stateToProps(state) {
    return {
        user_menu: state.dashboard.get('user_menu'),
        main_menu: state.dashboard.get('main_menu'),
        profile: state.dashboard.get('profile'),
    }
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        triggerProfileModal
    }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(Home);

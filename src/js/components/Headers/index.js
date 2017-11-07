import React from "react"

// style
import './style/Headers.scss';
import './style/responsive.scss';

// components
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdMenu from 'react-icons/lib/md/menu';
import MdNotifications from 'react-icons/lib/md/notifications';

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { triggerUserMenu, triggerMainMenu } from '../../actions/DashboardActions.js'

class Headers extends React.Component {

    render() {

        let { type } = this.props

        switch(type) {

            case 'dashboard_top': {
                return  <div className="component--header top">
                    <div>
                        <div className="info--left">
                          <p>Give, Pray and stay Connected.</p>
                        </div>
                        <div className="logo--dashboard">
                          <img src="../../../images/dashboard/logo--dashboard.png" />
                        </div>
                        <div className="info--user" onClick={this.props.triggerUserMenu}>
                            <img src="../../../images/dashboard/main-user--dashboard.png" />
                            <p className="name--user">John Doe <MdKeyboardArrowDown className="arrow"/></p>
                        </div>
                    </div>
                </div>
            }

            case 'dashboard_sub': {
                return  <div className="component--header sub">
                    <div>
                        <div className="wrap--info--left">
                            <p className="name--church">Church Name</p>
                            <div className="wrap--icon--notification">
                                <MdNotifications className="icon--notification"/>
                                <span>3</span>
                            </div>
                        </div>
                        <div className="info--church" onClick={this.props.triggerMainMenu}>
                            <img src="../../../images/dashboard/icon--church.png" />
                            <p><span>My Church </span><MdMenu className="menu"/></p>
                        </div>
                    </div>
                </div>
            }

            default: {
                return <div></div>
            }

        }

    }

}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        triggerUserMenu,
        triggerMainMenu
    }, dispatch)
}

export default connect(null, dispatchToProps)(Headers);

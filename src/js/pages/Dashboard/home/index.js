import React from "react"

// componets
import Header from '../../../components/Headers/index.js';
import Bundle from '../../../components/Bundle/index.js'
import Modal from '../../../components/Modal/index.js'

// style
import './style/Dashboard.scss';
import './style/responsive.scss';

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {

    render() {

        return(
            <div className="component--dashboard--home wrap--page middle">

                <Header type="dashboard_top"/>
                <Header type="dashboard_sub"/>

                <div className="content">
                    <div className="first-half">
                        <div className="wrap--left">
                            <Bundle type="gifts" size="small" color="light" icon="icon-gift" title="Total Gifts" button={"select"}/>
                            <Bundle type="prayer" size="small" color="light" icon="icon--prayer" title="Prayer Requests (4)"/>
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

            </div>
        )

    }

}

// <img src="../../../images/dashboard.png" />

function stateToProps(state) {
    return {
        user_menu: state.dashboard.get('user_menu'),
        main_menu: state.dashboard.get('main_menu'),
    }
}

export default connect(stateToProps, null)(Home);

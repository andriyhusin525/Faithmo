import React from "react"

// style
import './style/Menu.scss';

// componets
import Button from '../../../components/Buttons/Button.js';

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { triggerUserMenu } from '../../../actions/DashboardActions.js'

// COMPONENT
class MenuUser extends React.Component {

    render() {

        let { visibility_class } = this.props

        return (
            <div className={"modal-content user " + visibility_class}>
                <div className="wrap--content">
                    <img src="../../images/dashboard/user--menu.png" />
                    <p className="user--name">John Doe</p>
                    <Button
                        type="gradient"
                        class_name={"user--edit button--menu--user"}
                        text={"Edit Profile"}
                    />
                    <Button
                        type="neutral--red button--menu--user"
                        class_name={"switch--view"}
                        text={"Switch View"}
                    />
                    <p className="logout">Logout</p>
                </div>
                <div className="wrap--button--exit" onClick={this.props.triggerUserMenu}>
                    <img src="../../images/icons/icon--exit.png" />
                </div>
            </div>
        )

    }

}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        triggerUserMenu,
    }, dispatch)
}

export default connect(null, dispatchToProps)(MenuUser);

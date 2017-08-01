import React from "react"

// style
import './style/Menu.scss';

// actions
import { triggerMainMenu } from '../../../actions/DashboardActions.js'

//utils
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENT
class MenuMain extends React.Component {

    render() {

        return (
            <div className="modal-content main">
                <div className="wrap--content">
                    <nav>
                        <ul>
                            <li><img src="../../../images/icons/icon--church--black.png"/><p>My Church</p></li>
                            <li><img src="../../../images/icons/icon--giving--black.png"/><p>Giving</p></li>
                            <li><img src="../../../images/icons/icon--events--black.png"/><p>Events</p></li>
                            <li><img src="../../../images/icons/icon--groups--black.png"/><p>Group</p></li>
                        </ul>
                    </nav>
                </div>
                <div className="wrap--button--exit" onClick={this.props.triggerMainMenu}>
                    <img src="../../images/icons/icon--exit.png" />
                </div>
            </div>
        )

    }

}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        triggerMainMenu,
    }, dispatch)
}

export default connect(null, dispatchToProps)(MenuMain);

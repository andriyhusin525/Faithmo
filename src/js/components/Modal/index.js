import React from "react";

// style
import './style/Modal.scss';

// components
import MenuUser from '../../pages/Dashboard/home/MenuUser.js'
import MenuMain from '../../pages/Dashboard/home/MenuMain.js'
import ErrorModal from '../../pages/Signup/church/ErrorModal.js'

export default class Modal extends React.Component {

    getModalContent(type, modal_class, data) {
        switch(type) {
            case "menu--user":
                return <MenuUser visibility_class={modal_class} />
                break;
            case "menu--main":
                return <MenuMain visibility_class={modal_class}/>
                break;
            case "form-error":
                return <ErrorModal errors_obj={data}/>
                break;
            default:
                return <div></div>
        }
    }

    render() {

        let { type, visibility, data } = this.props
        let modal_class = visibility || data ? 'visible' : 'hidden'

        return(

            <div className={"modal " +  modal_class }>

                { this.getModalContent(type, modal_class, data) }

            </div>

        )

    }

}

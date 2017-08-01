import React from "react";

// style
import './style/Modal.scss';

// components
import MenuUser from '../../pages/Dashboard/home/MenuUser.js'
import MenuMain from '../../pages/Dashboard/home/MenuMain.js'

export default class Modal extends React.Component {

    getModalContent(type, modal_class) {
        switch(type) {
            case "menu--user":
                return <MenuUser visibility_class={modal_class} />
                break;
            case "menu--main":
                return <MenuMain visibility_class={modal_class}/>
                break;
            default:
                return <div></div>
        }
    }

    render() {

        let { type, visibility } = this.props
        let modal_class = visibility ? 'visible' : 'hidden'
        
        return(

            <div className={"modal " +  modal_class}>

                { this.getModalContent(type, modal_class) }

            </div>

        )

    }

}

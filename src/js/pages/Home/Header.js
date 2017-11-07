import React from "react"

// componets
import Button from '../../components/Buttons/Button.js';

export default class Header extends React.Component {

    getAuthentication() {
        return <div className="wrap--auth__buttons">
            <Button type="green" text="User signup" class_name="margin--r" />
            <Button type="red" text="Church signup" link to="signup-church"/>
        </div>
    }

    render() {
        return(
            <header className="component--header--home">
                <div className="layer--over">
                    <img className="logo" src="images/logo.png" alt=""/>
                    <Button type="neutral" text="Login" link class_name="header login-btn" to="login" />
                    <div class="wrap--title--main">
                        <h1 className="title--main">Pray, Give</h1>
                        <p className="title-info--main">and  stay up to date<span>!</span></p>
                    </div>
                    { this.getAuthentication() }
                </div>
            </header>
        )
    }
}

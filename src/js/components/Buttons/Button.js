import React from "react"

import { Link } from 'react-router-dom'

// style
import './style/Buttons.scss';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.buttonFunction = this.buttonFunction.bind(this)
    }

    buttonFunction() {
        let fun = this.props.fun
        if (fun) {
            let args = this.props.fun_arg
            return fun(args ? args : null)
        }
        else {
            return null
        }
    }

    render() {
        let { type, text, class_name, link, to } = this.props
        if (link) {
            return <div className={"button " + type + " link " + class_name}>
                {
                    link ? <Link to={to}>{ text }</Link> : text
                }
            </div>
        }
        else {
            return <button className={"button " + type + " " + class_name} onClick={this.buttonFunction}>{ text }</button>
        }
    }
}

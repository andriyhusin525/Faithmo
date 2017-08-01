import React from "react"

// components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Button from '../Buttons/Button.js';
import Slider from './Slider.js';
import FaPlus from 'react-icons/lib/fa/plus';
import DayPicker from 'react-day-picker';

// style
import './style/Bundle.scss';
import './style/Calendar.scss';

export default class Bundle extends React.Component {

    constructor(props) {
        super(props);
        this._getButton = this._getButton.bind(this)
        this._getContent = this._getContent.bind(this)
    }

    _getButton(button) {
        if (button === "select") {
            return <MuiThemeProvider>
                <div className="wrap--select">
                <SelectField
                    hintText="This week"
                    fullWidth={true}
                >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                </div>
            </MuiThemeProvider>
        }
        if (button === "add_event") {
            return <button className="button--add-event">
                <img className="icon--plus" src="../../../images/icons/icon--plus--light.png" />
                Add new event
            </button>
        }
    }

    _getHeader(type, size, color, icon, title, button) {
        return <div className={"header " + color + " " + size}>
            <div>
                { icon ? <img src={"../../images/icons/" + icon + ".png"} /> : null }
                <p>{ title }</p>
            </div>
            { button ? this._getButton(button) : null }
        </div>
    }

    _getContent(type) {
        if (type === "gifts") {
            return <div className="wrap--content gifts">
                <div className="wrap--info gifts">
                    <p className="price">$400</p>
                    <p>Gift givers: 13</p>
                </div>
                <div className="wrap--button gifts">
                    <Button type="neutral" class_name="border--red gifts" text="View Gift History" />
                </div>
            </div>
        }
        if (type === 'prayer') {
            let settings = {
                slide_to_show: 1,
                slide_to_scroll: 1
            }
            return  <div className="wrap--content prayer">
                <Slider type={type} settings={settings}/>
            </div>
        }
        if (type === "subscribe") {
            let settings = {
                slide_to_show: 1,
                slide_to_scroll: 1
            }
            return  <div className="wrap--content subscribe">
                <Slider type={type} settings={settings}/>
            </div>
        }
        if (type === "calendar") {
            const modifiers = {
                party: new Date(2017, 7, 14),
                current: new Date(),
            };
            const modifiersStyles = {
                current: {
                    color: 'white',
                    backgroundColor: '#FF9871',
                },
                party: {
                    color: '#3D3D3D',
                    backgroundColor: '#EDEDED',
                },
            };
            let settings = {
                slide_to_show: 1,
                slide_to_scroll: 1
            }
            return <div className="wrap--content calendar">
                <div className="wrap--left">
                <DayPicker
                    enableOutsideDays
                    className="calendar--events"
                    initialMonth={new Date()}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                />
                </div>
                <div className="wrap--right">
                    <Slider type={type} settings={settings}/>
                </div>
            </div>
        }
    }

    render() {

        let { type, size, color, icon, title, button } = this.props

        return(
            <div className={"wrap--bundle " + type}>
                { this._getHeader(type, size, color, icon, title, button) }
                { this._getContent(type) }
            </div>
        )

    }

}

import React from "react"
import Carousel from 'nuka-carousel';
import carouselArrows from './carouselArrows.js';

// components
import Button from '../Buttons/Button.js';
import Modal from '../../components/Modal/index.js'

// style
import './style/Slider.scss';

// data
import data from '../../data/data--sliders.js';
import Decorators from '../../data/config--sliders-decorators.js';

export default class SimpleSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openProfile: false,
    }
  }
    onNameClick(user){
      // this.setState({
      //   openProfile: true
      // })
      if(this.props.onClick){
        this.props.onClick(user);
      }
    }
    _getSliderContent(data, type) {
        switch(type) {
            case "prayer": {
                let new_data = this.groupData(data, 2)
                return new_data.map((data, i) => {
                    return <div key={i} className="wrap--content">
                        { this.getGroupedData(data, type) }
                    </div>
                })
            }
            case "subscribe": {
                let new_data = this.groupData(data, 4)
                return new_data.map((data, i) => {
                    return <div key={i} className="wrap--users">
                        { this.getGroupedData(data, type) }
                    </div>
                })
            }
            case "calendar": {
                return data.map((event, i) => {
                    return <div key={i} className="wrap--event">
                        <div className="content--left">
                            <img src={event.img} />
                            <h5>{event.title}</h5>
                        </div>
                        <div className="content--right">
                            <span className="date">Date {event.date}</span>
                            <span className="time">Time {event.time}</span>
                            <p className="par">{event.par_one}</p>
                            <p className="par">{event.par_two}</p>
                            <Button type="neutral" class_name={"border--red " + type } text="Edit" />
                            <Button type="neutral" class_name={"border--red " + type } text="Delete" />
                        </div>
                    </div>
                })
            }
            default:
                return <div></div>
        }
    }

    getGroupedData(data, type) {
        switch(type) {
            case "subscribe": {
                return data.map((user, i) => {
                    return <div className="wrap--user" key={i}>
                        <img src={user.img} />
                        <h6>{user.name}</h6>
                    </div>
                })
            }
            case "prayer": {
                return data.map((user, i) => {
                    return  <div key={i} className="content--slide">
                        <img src={user.img} />
                        <div className="wrap--user-info">
                            <h6 className="name" onClick={()=>this.onNameClick(user)}>{user.name}</h6>
                            <p className="date">{user.date}</p>
                            <p className="text">{user.text}</p>
                        </div>
                    </div>
                })
            }
            default:
                return <div></div>
        }
    }

    groupData(data, group_of) {
        let whole_bundle = []
        let new_arr = []
        for(let i = 0; i < data.length; i = i + group_of) {
            for (let y = i; y < i + group_of && y < data.length; y++) {
                new_arr.push(data[y])
            }
            whole_bundle.push(new_arr)
            new_arr = []
        }
        return whole_bundle
    }

    render() {

        let { type, settings } = this.props

        return (
            <div className={"wrap--slider " + type}>
                <Carousel
                    dragging={true}
                    edgeEasing="easeOutCirc"
                    cellSpacing={40}
                    afterSlide={this.clearText}
                    ref="carousel"
                    decorators={Decorators}
                    slidesToShow={settings.slide_to_show}
                    slidesToScroll={settings.slide_to_scroll}
                >
                    { this._getSliderContent(data[type], type) }
                </Carousel>
            </div>
        );

   }

}

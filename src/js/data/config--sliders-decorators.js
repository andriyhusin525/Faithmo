import React from "react"

// components
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';

export default [{
  component: React.createClass({
    render() {
      return (
        <MdKeyboardArrowLeft
          onClick={this.props.previousSlide}
          className="left-arrow"
          />
      )
    }
  }),
  position: 'CenterLeft',
},
{
  component: React.createClass({
    render() {
      return (
        <MdKeyboardArrowRight
          onClick={this.props.nextSlide}
          className="right-arrow"
          />
      )
    }
  }),
  position: 'CenterRight',
},
{
  component: React.createClass({
    render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return (
        <ul style={self.getListStyles()}>
          {
            indexes.map(function(index) {
              return (
                <li style={self.getListItemStyles()} key={index}>
                    <div
                        style={self.getButtonStyles(self.props.currentSlide === index)}
                        onClick={self.props.goToSlide.bind(null, index)}>
                    </div>
                </li>
              )
            })
          }
        </ul>
      )
    },
    getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      }
    },
    getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      }
    },
    getButtonStyles(active) {
      return {
        width: 10,
        height: 10,
        borderRadius: 50,
        background: active ? '#DCDCDC' : 'white',
        border: active ? 0 : 1,
        borderStyle: active ? null : 'solid',
        borderColor: active ? null : '#DCDCDC',
        cursor: 'pointer',
        display: "inline-block",
        marginLeft: 5
      }
    }
  }),
  position: 'BottomCenter'
}
];

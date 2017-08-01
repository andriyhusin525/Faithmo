import React from 'react';

// components
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';

export default [{
    component: class LeftArrow extends React.Component {
        render() {
            return (
                <MdKeyboardArrowLeft onClick={this.props.previousSlide} className="left-arrow"/>
            );
        }
    }
}, {
    component: class RightArrow extends React.Component {
        render() {
            return (
                <MdKeyboardArrowRight onClick={this.props.nextSlide} className="right-arrow"/>
            );
        }
    }
}];

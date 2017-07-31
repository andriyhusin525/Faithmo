import React from "react"

// componets
import Header from './Header.js';
import Content from './Content.js';

// style
import './style/Home.scss';
import './style/responsive.scss';

export default class Home extends React.Component {
    render() {
        return(
            <div className="page--home">
                <Header />
                <Content />
            </div>
        )
    }
}

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// components
import Footer from '../components/Footer/Footer.js';

// scene
import Home from './Home/index.js';
import Signup from './Signup';
import Dashboard from './Dashboard';

// style
import '../../sass/style.scss';

const customHistory = createBrowserHistory()

function AppRouter() {
    return (
        <Router history={customHistory}>
            <div className="wrap--routes">
                <Route exact path="/" component={Home}/>
                <Route path="/signup-church" component={Signup.Church}/>
                <Route path="/dashboard" component={Dashboard.Home}/>
                <Footer />
            </div>
        </Router>
    )
}

module.exports = {
    AppRouter,
}

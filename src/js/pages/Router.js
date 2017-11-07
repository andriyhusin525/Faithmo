import React from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// components
import Footer from '../components/Footer/Footer.js';

// scene
import Home from './Home/index.js';
import Login from './Login';
import ForgotPassword from './ForgotPassword/index.js';
import Signup from './Signup';
import Dashboard from './Dashboard';

// style
import '../../sass/style.scss';

export class APP extends React.Component {
  render() {
    return (
      <div className="wrap--routes">
        {this.props.children}
      </div>
    );
  }
}
// <Footer />

const customHistory = createBrowserHistory()

function AppRouter() {
    return (
        <Router history={hashHistory} >
          <Route path="/" component={APP}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="forgot-password" component={ForgotPassword}/>
            <Route path="signup-church" component={Signup.Church}/>
            <Route path="dashboard" component={Dashboard.Home}/>
          </Route>
        </Router>
    )
}

module.exports = {
    AppRouter,
}

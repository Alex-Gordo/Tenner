import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLogout } from './store/actions/userActions'
import AppHeader from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';
import { TennerApp } from './pages/TennerApp';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { GigDetails } from './pages/GigDetails.jsx';
import { GigCheckout } from './pages/GigCheckout.jsx'
import { LoginSignUp } from './cmps/LoginSignUp';

// import { gigService } from '../../frontend/src/services/gigService.js';


class _App extends Component {
  render() {
    const { onLogout, loggedInUser } = this.props
    return (
      <div className="app" >
        <Router>
          <AppHeader />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/gigs" component={TennerApp} />
            <Route path='/gig/:gig/checkout' component={GigCheckout} />
            <Route path='/gig/:gig' component={GigDetails} />
            <Route path="/about" component={About} />
            <Route path="/login-sign-up" component={LoginSignUp} />
       
          </Switch>
        </Router>
        <AppFooter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.userModule.loggedInUser
  }
}

const mapDispatchToProps = {
  onLogout
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
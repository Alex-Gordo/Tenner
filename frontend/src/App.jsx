import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLogout } from './store/actions/userActions'
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';
import { TennerApp } from './pages/TennerApp';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { GigDetails } from './pages/GigDetails.jsx';

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
            <div className="main-container">
              <Route path="/gigs" component={TennerApp} />
              <Route path='/gig/:gig' component={GigDetails} />
              <Route path="/about" component={About} />
            </div>
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
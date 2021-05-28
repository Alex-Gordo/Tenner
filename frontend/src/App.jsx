import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { onLogout } from './store/actions/userActions'
import { GigDetails } from './pages/GigDetails.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { TennerApp } from './pages/TennerApp';
import { AppFooter } from './cmps/AppFooter';
import React, { Component } from 'react';
import { Home } from './pages/Home.jsx';
import { connect } from 'react-redux';
import { About } from './pages/About';
// import { gigService } from '../../frontend/src/services/gigService.js';


class _App extends Component {
  render() {
    const { onLogout, loggedInUser } = this.props
    return (
      <div className="app" >
        <Router>
            <AppHeader />
          <div className="main-container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/gigs" component={TennerApp} />
              <Route path='/gig/:gig' component={GigDetails} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
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
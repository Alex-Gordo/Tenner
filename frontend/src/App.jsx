import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx';
import { TennerApp } from './pages/TennerApp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { onLogout } from './store/actions/userActions.js';

// import { gigService } from '../../frontend/src/services/gigService.js';


class _App extends Component {
  render() {
    const { onLogout, loggedInUser } = this.props
    return (

      <div className="app">
        <Router>
          <AppHeader onLogout={onLogout} loggedInUser={loggedInUser} />
          <Switch>
            <Route path="/tenner" component={TennerApp} />
          </Switch>
          <h1>This is main, here we render gig list with gig previews</h1>
          <footer>
            <h5>this is footer yo</h5>
          </footer>
        </Router>
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
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { onLogout } from './store/actions/userActions'




// import { gigService } from '../../frontend/src/services/gigService.js';

class _App extends Component {
  render() {
    const { onLogout, loggedInUser } = this.props
    return (
      <div className="app" >
        <Router>
          <AppHeader />
          {/* <Switch> */}
          {/* <Route path="/tenner" component={TennerApp} /> */}
          <Route path="/gigs" component={TennerApp} />
          {/* </Switch> */}
          <img className="hero img" src="https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_960_720.jpg"></img>
          <div className="main-container">
            <h1>This is main, here we render the gig list with gig previews and mucho nice content that will help us get jobs</h1>
          </div>
          <AppFooter />
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
  // onLogout
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
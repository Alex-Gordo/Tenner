import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';
import React, { Component } from 'react';
import { onLogout } from './store/actions/userActions'
import { About } from './pages/About';




// import { gigService } from '../../frontend/src/services/gigService.js';

class _App extends Component {
  render() {
    const { onLogout, loggedInUser } = this.props
    return (
      <div className="app" >
        <Router>
          <AppHeader />
          <div className="hero">
            <img className="img" src="https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_960_720.jpg" alt="hero"></img>
          </div>
          <div className="main-container">
            <Switch>
              <Route path="/gigs" component={TennerApp} />
              <Route path="/about" component={About} />
            </Switch>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quidem corporis ullam magni expedita! Laboriosam maxime quibusdam in et nemo natus id omnis dolores blanditiis neque iste rerum nam totam praesentium cupiditate dicta, at provident, fuga eveniet excepturi quisquam! Ad voluptatibus laborum dolores. Animi obcaecati praesentium officia debitis vel ea?</h1>
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
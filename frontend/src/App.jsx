import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
// import { gigService } from '../../frontend/src/services/gigService.js';
import { AppHeader } from './cmps/AppHeader.jsx';


export function App() {
  return (
    <div className="app">
      <Router>
        <AppHeader />


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


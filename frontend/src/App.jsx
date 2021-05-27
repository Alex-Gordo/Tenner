import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
//import { gigService } from '../../frontend/src/services/gigService.js';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';


export function App() {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <Switch>
<<<<<<< HEAD
          {/* <Route path="/tenner" component={TennerApp} /> */}
          <Route path="/gigs" component={TennerApp} />

=======
          <Route path="/tenner" component={TennerApp} />
>>>>>>> ece10fbde23158bc58662ea0cd2d2ba7487f163c
        </Switch>
        <img className="hero img" src="https://cdn.pixabay.com/photo/2020/01/08/03/56/man-4749237_960_720.jpg"></img>
        <div className="main-container">
          <h1>This is main, here we render the gig list with gig previews and mucho nice content that will help us get jobs</h1>
        </div>
        <AppFooter />
      </Router>
    </div>
  )
}


import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
import { gigService} from '../../frontend/src/services/gigService.js';
import { AppHeader} from './cmps/AppHeader.jsx';


export function App() {
  return (
    <div className="app">
      <Router>
      <AppHeader/>

        <main>
          <Switch>
            <Route path="/tenner" component={TennerApp} />
          </Switch>
        </main>
        <footer>
          Tenner App
          <br/>

           <div><pre>{JSON.stringify(gigService.query(), null, 2) }</pre></div>

          



        </footer>
      </Router>
    </div>
  )
}


import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp';
import { gigService } from '../../frontend/src/services/gigService.js';



export function App() {
  return (
    <div className="app">
      <Router>
        <header>

        </header>
        <main className="app">
          <Switch>
            <Route path="/tenner" component={TennerApp} />

          </Switch>
          <h1>This is main</h1>
        </main>
        <footer>

        </footer>
      </Router>
    </div>
  )
}


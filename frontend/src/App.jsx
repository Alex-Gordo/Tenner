import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { TennerApp } from './pages/TennerApp'



export function App() {
  return (
    <div className="app">
      <Router>

        <main>
          <Switch>
            <Route path="/tenner" component={TennerApp} />
          </Switch>
        </main>
        <footer>
          Tenner App



          Alisa Alex Arik tAmir
        </footer>
      </Router>
    </div>
  )
}


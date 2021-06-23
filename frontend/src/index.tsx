import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Utils
import App from './App'
import Editor from './editor'

import './style/daiboomlog.scss'

const rootNode = document.querySelector('#react-root')

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App>
            <Editor />
          </App>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

if (rootNode) {
  render(<Root />, rootNode)
}

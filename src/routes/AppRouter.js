import React from 'react'
import {Router, Route, Switch,} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'


export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
  <Switch>
    <Route path='/' component={LoginPage} exact={true} />
    <PrivateRoute path='/dashboard' component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
  </Router>
)

export default AppRouter
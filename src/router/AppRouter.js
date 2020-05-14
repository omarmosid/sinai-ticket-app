import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../features/login/login'
import Dashboard from '../features/dashboard/dashboard'
import Home from '../features/home/home'
import TicketPage from '../features/ticket/ticket-page/ticket-page'
import PrivateRoute from './private/private'


const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <PrivateRoute path="/dashboard" exact>
        <Dashboard />
      </PrivateRoute>
      <Route path="/ticket/:id" exact>
        <TicketPage />
      </Route>
      <Route path="/" >
        <h1>404</h1>
      </Route>
    </Switch>
  )
}

export default AppRouter

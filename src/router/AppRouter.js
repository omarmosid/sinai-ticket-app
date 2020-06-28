import React, { useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../features/login/login'
import Dashboard from '../features/dashboard/dashboard'
import Home from '../features/home/home'
import TicketPage from '../features/ticket/ticket-page/ticket-page'
import PrivateRoute from './private/private'
import ProfilePage from '../features/profile/profile-page/profile-page'
import UsersPage from '../features/users/users-page/users-page'
import { GlobalContext } from '../context/globalContext'
import ProfileEdit from '../features/profile/profile-edit/profile-edit'

const AppRouter = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if(localStorage.getItem("token")) {
      dispatch({ type: 'LOAD_USER' });
    }
  }, [])

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <PrivateRoute path="/ticket/:id" exact>
        <TicketPage />
      </PrivateRoute>
      <PrivateRoute path="/dashboard" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/users" exact>
        <UsersPage />
      </PrivateRoute>
      <PrivateRoute path="/profile" exact>
        <ProfilePage />
      </PrivateRoute>
      <PrivateRoute path="/profile/edit" exact>
        <ProfileEdit />
      </PrivateRoute>
      <Route path="/" >
        <h1>404</h1>
      </Route>
    </Switch>
  )
}

export default AppRouter

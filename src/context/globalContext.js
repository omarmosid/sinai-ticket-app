import React, { useReducer, useEffect, useState } from "react";
import rootReducer from "../reducers/rootReducer";
import { initialState } from "./initialState";
import axios from "axios";

export const GlobalContext = React.createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    if(localStorage.getItem("user")) {
      dispatch({
        type: "LOGIN"
      })
      dispatch({
        type: 'SET_USER',
        payload: JSON.parse(localStorage.getItem("user"))
      })
    }
  }, [])

  // Fetch Tickets
  useEffect(() => {
    axios.get('/api/tickets')
      .then(res => {
        dispatch({
          type: 'GET_TICKETS',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, []);

  // Fetch Users
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        dispatch({
          type: 'GET_USERS',
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

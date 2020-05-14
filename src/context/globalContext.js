import React, { useReducer, useEffect, useState } from "react";
import rootReducer from "../reducers/rootReducer";
import { initialState } from "./initialState";
import axios from "axios";

export const GlobalContext = React.createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // Fetch Tickets
  useEffect(() => {
    axios.get('https://sinai-ticket-app.herokuapp.com/api/tickets')
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
    axios.get('https://sinai-ticket-app.herokuapp.com/api/users')
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

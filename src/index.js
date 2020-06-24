import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./context/globalContext";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000"
// axios.defaults.baseURL = "https://sinai-ticket-app.herokuapp.com"

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <AppRouter />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

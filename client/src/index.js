import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Ripple } from 'react-preloaders';
import { Helmet } from 'react-helmet'

ReactDOM.render(

  <BrowserRouter>
    <Helmet>
      <title>{"Overtone"}</title>
    </Helmet>
    <App />
    <Ripple />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

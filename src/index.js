import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import store from './store/index';

import App from "./App";

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

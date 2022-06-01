import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import makeStore from "./redux/store";

const store = makeStore();
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

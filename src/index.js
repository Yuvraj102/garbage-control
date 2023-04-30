import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import StateProvider from "./Context/StateProvider";
import { initialState, reducer } from "./Context/reducer";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createBrowserHistory } from "history";

const root = ReactDOM.createRoot(document.getElementById("root"));
const history = createBrowserHistory();

root.render(
  <BrowserRouter history={history}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

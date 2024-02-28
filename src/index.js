import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import {store} from './store';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>
);

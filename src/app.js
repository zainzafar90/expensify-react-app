import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setFilterText } from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({ description: "Rent Bill" }));

store.dispatch(addExpense({ description: "Coffee Bill" }));
 
setTimeout(() => store.dispatch(setFilterText("rent")), 2000);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));

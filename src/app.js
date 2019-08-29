import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Coffee Bill",
    amount: 350,
    createdAt: 1567100704192,
    notes: 'Yo notes..'
  })
);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));

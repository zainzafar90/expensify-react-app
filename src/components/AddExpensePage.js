import React from "react";
import { connect } from "react-redux";

import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    Add Expense
    <ExpenseForm
      onSubmit={expense => {
        console.log(expense);
        dispatch(startAddExpense(expense));
        history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

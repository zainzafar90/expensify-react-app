import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = ({ dispatch, match, expense, history }) => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={expense}
        onSubmit={updatedExpense => {
          dispatch(editExpense(match.params.id, updatedExpense));
          history.push("/");
        }}
      />

      <button
        onClick={() => {
          dispatch(removeExpense({ id: expense.id }));
          history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => props.match.params.id === expense.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);

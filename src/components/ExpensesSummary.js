import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import selectExpenses from "../selectors/expenses";
import selectTotalExpenses from "../selectors/expense-total";

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
        <span>{formattedExpensesTotal}</span>
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectTotalExpenses(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);

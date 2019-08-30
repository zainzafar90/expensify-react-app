const getTotalExpense = expenses => {
  return expenses.reduce((acc, cur) => {
    return acc + parseFloat(cur.amount);
  }, 0);
};

export default getTotalExpense;

import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ id: "123", type: "REMOVE_EXPENSE" });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", { description: "New Title 1" });
  expect(action).toEqual({
    id: "123",
    type: "EDIT_EXPENSE",
    updates: { description: "New Title 1" }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "New expense 1",
    note: "notes..",
    amount: 23400,
    createdAt: 10000
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({ expense: { ...expenseData }, type: "ADD_EXPENSE" });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense({});
  expect(action).toEqual({ expense: {}, type: "ADD_EXPENSE" });
});

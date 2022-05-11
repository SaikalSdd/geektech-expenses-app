import ExpensesItem from "./components/ExpensesItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const dataBox = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 200,
    date: new Date(2022, 1, 4),
  },
  {
    id: 2,
    title: "Book",
    amount: 300,
    date: new Date(2022, 7, 26),
  },
  {
    id: 3,
    title: "Internet",
    amount: 500,
    date: new Date(2021, 0, 3),
  },
];

function App() {
  const [expensesList, setExpensesList] = useState(dataBox);

  const addNewExpense = (newExpense) => {
    setExpensesList([newExpense, ...expensesList]);
  };

  const removeExpenseHandler = (expenseId) => {
    const updatedExpenses = expensesList.filter(
      (expense) => expense.id !== expenseId
    );
    setExpensesList(updatedExpenses);
  };

  return (
    <div>
      <NewExpense addExpense={addNewExpense} />
      <Expenses allExpenses={expensesList} onRemove={removeExpenseHandler} />
    </div>
  );
}

export default App;

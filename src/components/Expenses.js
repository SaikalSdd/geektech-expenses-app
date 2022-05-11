import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);

  const { allExpenses, onRemove } = props;

  const filteredExpenses = allExpenses.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  const filterByYear = (year) => {
    setSelectedYear(year);
  };

  const removeExpense = (id) => {
    onRemove(id);
  };

  return (
    <Card>
      <ExpensesFilter onFilter={filterByYear} selectedYear={selectedYear} />
      {filteredExpenses.map((expense) => (
        <ExpensesItem
          key={Math.random()}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.amount}
          onRemoveExpense={removeExpense}
        />
      ))}
    </Card>
  );
};

export default Expenses;

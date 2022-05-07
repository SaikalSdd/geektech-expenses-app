import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);

  console.log("props", props);
  console.log(props.data);
  const { allExpenses } = props;

  console.log("allExpenses", allExpenses);

  const filteredExpenses = allExpenses.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  console.log("filteredExpenses", filteredExpenses);

  const filterByYear = (year) => {
    setSelectedYear(year);
    console.log("Получаем из Expenses year", year);
  };

  return (
    <Card>
      <ExpensesFilter onFilter={filterByYear} selectedYear={selectedYear} />
      {filteredExpenses.map((expense) => (
        <ExpensesItem
          key={Math.random()}
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

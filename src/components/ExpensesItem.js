import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Card from "./Card";

const ExpensesItem = (props) => {
  const { date, title, price } = props;

  //props - объект
  // props => {}

  // useState() => [a, b]
  // a - переменная состояния
  // b - функция

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
      </div>
      <div className="expense-item__price">${price}</div>
      <button>Remove</button>
    </Card>
  );
};

export default ExpensesItem;

import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Card from "./Card";

const ExpensesItem = (props) => {
  const { id, date, title, price, onRemoveExpense } = props;

  //props - объект
  // props => {}

  // useState() => [a, b]
  // a - переменная состояния
  // b - функция

  const removeExpenseHandler = (id) => {
    onRemoveExpense(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
      </div>
      <div className="expense-item__price">${price}</div>
      <button onClick={(e) => removeExpenseHandler(id)}>Remove</button>
    </Card>
  );
};

export default ExpensesItem;

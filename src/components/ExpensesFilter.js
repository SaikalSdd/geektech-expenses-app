import "./ExpensesFilter.css";

const ExpensesFilter = ({ onFilter, selectedYear }) => {
  const filterYearHandler = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="expenses-list">
      <div className="expenses-list__fallback">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={filterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

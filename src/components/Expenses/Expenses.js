import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filtredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filtredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filtredExpenses} />
    </Card>
  );
};

export default Expenses;

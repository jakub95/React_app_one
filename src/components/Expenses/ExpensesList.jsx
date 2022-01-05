import React from "react";

//components
import ExpenseItem from "./ExpenseItem";

//css
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((epxense) => (
        <ExpenseItem
          key={epxense.id}
          title={epxense.title}
          amount={epxense.amount}
          date={epxense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

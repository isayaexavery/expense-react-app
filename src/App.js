import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';
// import ExpensesFilter from './components/Expense/ExpensesFilter';

const DUMY_EXPENSES = [
  {
    id: 'ed1',
    title: 'New titile',
    amount: 454,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'ed2',
    title: 'fff New titile',
    amount: 454,
    date: new Date(2020, 5, 12)
  }
];
const App = () => {
const [expenses, setExpenses] = useState(DUMY_EXPENSES);

const addExpenseHandler = expense =>{
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses]
  });
};

  // return React.createElement('div', {},
  // React.createElement('h2', {}, "Ltsr getee"),
  // React.createElement(Expenses, { items: expenses})
// );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;

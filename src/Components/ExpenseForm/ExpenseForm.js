import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleInputHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountInputHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateInputHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSubmitForm(expense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleInputHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountInputHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateInputHandler} value={enteredDate}/>
        </div>
        <div className='new-expense__actions'>
          <button>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
        
      </div>
    </form>
  )
}

export default ExpenseForm
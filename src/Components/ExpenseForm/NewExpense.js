import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const InputFormData = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.onSubmitExpense(newExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitForm={InputFormData}/>
        </div>
        
    )
}

export default NewExpense
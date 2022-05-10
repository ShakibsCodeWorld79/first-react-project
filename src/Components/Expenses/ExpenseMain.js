import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseMain.css'

const ExpenseMain = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');
    
    const filteredYearHandler = (filteredYear) =>{
        setSelectedYear(filteredYear);
    }

    const filteredItem = props.expenses.filter(items => {
        return items.date.getFullYear().toString() === selectedYear;
    });
    

    const expenseItem = filteredItem.map(items => 
        {return <ExpenseItem  key={items.id} title={items.title} date={items.date} amount={items.amount}/>}
    );

    return (
        <div className='expenses'>
            <ExpenseFilter defaultYear={selectedYear} onFilteredYear={filteredYearHandler}/>
            {expenseItem.length > 0 ? expenseItem : <h2>There is no expense</h2>}
        </div>
    )
}

export default ExpenseMain
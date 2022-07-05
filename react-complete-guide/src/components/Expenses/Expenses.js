import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedValue={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.items?.map(item => (
                        <ExpenseItem key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))
                }
            </Card>
        </div>

    )
}
export default Expenses;
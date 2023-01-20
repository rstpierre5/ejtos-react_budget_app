import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);

    const handleBudgetChange = (value) => {
        if(value>20000){
            alert("The budget cannot exceed 20000");
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(totalExpenses>value){
            alert("You cannot reduce the budget lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}&nbsp;</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step='10'
                onChange={(event) => handleBudgetChange(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;

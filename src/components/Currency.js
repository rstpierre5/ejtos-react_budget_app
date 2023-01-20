import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (value) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    };


    return (
        <div className='alert alert-secondary'>
            <label>Currency: &nbsp;</label>
            <select className='btn dropdown-toggle' id="currency" onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
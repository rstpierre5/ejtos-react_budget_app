import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
//import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' 

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FontAwesomeIcon icon={faCirclePlus} onClick={event=> increaseAllocation(props.name)} style={{color: 'rgb(93, 175, 104)', background: 'rgb(255, 255, 255)'}}/></td>
            <td><FontAwesomeIcon icon={faCircleMinus} onClick={event=> decreaseAllocation(props.name)} style={{color: 'rgb(189, 51, 51)', background: 'rgb(255, 255, 255)'}}/></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};


export default ExpenseItem;
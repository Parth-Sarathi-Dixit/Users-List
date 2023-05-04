import React, { useState } from 'react'
import styles from '../styles/UserInput.module.css'
import ErrorModal from './UI/ErrorModal';

const UserInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const clearHandler = (event) => {
        event.preventDefault();
        props.onClearUserData();
        setEnteredName('');
        setEnteredAge('');
    }
    const errorHandler = () => {
        setError(null)
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: enteredName,
            age: enteredAge
        };
        // console.log(userData);


        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            })
            return;
        }
        if (parseInt(enteredAge) < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age'
            })
            return;
        }
        props.onSaveUserData(userData);
        setEnteredName('');
        setEnteredAge('');

    }
    return (
        <div>
            {error && <ErrorModal error={error.title} message={error.message} onConfirm={errorHandler} />}
            <div className={styles.formField}>
                <form onSubmit={formSubmitHandler}>
                    <label>
                        Username
                    </label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                    <label>
                        Age (Years)
                    </label>
                    <input type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <div className={styles.buttonDiv}>
                        <button action='submit'>Add User</button>
                        <button onClick={clearHandler}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserInput
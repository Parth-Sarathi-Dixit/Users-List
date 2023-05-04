import React from 'react'
import UserInput from './UserInput'


const NewUser = (props) => {
    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
        // console.log(userData);
        props.onAddUser(userData);
    }
    const errorHandler = (event) => {
        props.displayModal(event);
    }
    const clearUserDataHandler = () => {
        props.onClearUsers();
    }
    return (
        <div>
            <UserInput showError={errorHandler} onSaveUserData={saveUserDataHandler} onClearUserData={clearUserDataHandler} />
        </div>
    )
}

export default NewUser
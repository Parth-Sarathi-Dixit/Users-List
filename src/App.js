import React, { useState } from 'react';
import './App.css';
import Users from './components/Users';
import NewUser from './components/NewUser';
import ErrorModal from './components/UI/ErrorModal';
const USER_LIST = [];

const App = () => {
    const [users, setUsers] = useState(USER_LIST);
    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        })
    }
    const clearUserHandler = () => {
        setUsers([]);
    }
    return (
        <div>
            <NewUser onAddUser={addUserHandler} onClearUsers={clearUserHandler} />
            <Users items={users} />
        </div>
    )
}

export default App
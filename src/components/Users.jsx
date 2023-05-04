import React from 'react'
import User from './User'
import styles from '../styles/Users.module.css'

const Users = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.userList + ` ${props.items.length > 0 ? 'onAddingItems' : ''}`}>
                {props.items.map((item) => {
                    return (
                        <User name={item.name} age={item.age} key={Math.random()} />
                    )
                })}
            </div>
        </div>
    )
}

export default Users
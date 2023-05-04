import React from 'react'

const User = (props) => {
    return (
        <div>
            <p>{props.name} {props.age} years old</p>
        </div>
    )
}

export default User
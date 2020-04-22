import React from 'react'

export default function UserOutput(props) {
    return (
        <div>
            <p>Some Text Line 1</p>
            <p>written by {props.userName}</p>
        </div>
    )
}

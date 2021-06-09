import React from 'react'

const Button = ({name,method,type}) => {
    return (
        <React.Fragment>
            <button type={type} onClick={(e)=>method(e)}>{name}</button>
        </React.Fragment>
    )
}

export default Button

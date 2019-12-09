import React from "react";
import  './Input.scss';

const Input = props => {
    const inputType = props.type || 'text'
    const inputId = `${Math.random()}`

    return(
        <div className='Input'>
            <input 
                type={inputType}
                id={inputId}
                name={props.name}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required={props.required}
            />
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default Input
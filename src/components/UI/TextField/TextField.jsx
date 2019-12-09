import React from "react";
import './TextField.scss';

const Input = props => {
    const inputType = props.type || 'text'
    const cls = 'TextField'
    const inputId = `${Math.random()}`

    return(
        <div className='TextField'>
            <label htmlFor={inputId}>{props.label}</label>
            <input 
                type={inputType}
                id={inputId}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
        </div>
    )
}

export default Input
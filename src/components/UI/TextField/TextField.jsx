import React, { Component } from "react";
import './TextField.scss';

function isInvalid() {

}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = 'TextField'
    const inputId = `${Math.random()}`
    if(isInvalid(props)) {
        cls.push('invalid')
    }
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
                required={props.required}
                disabled={props.disabled}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage || "Неверно введено значение!"}</span> : null
            }
        </div>
    )
}

export default Input
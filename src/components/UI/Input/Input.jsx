import React, { Component } from "react";
import classes from './Input.scss';

function isInvalid() {

}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const inputId = `${Math.random()}`
    if(isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return(
        <div className='Input'>
            <input 
                type={inputType}
                id={inputId}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required={props.required}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage || "Неверно введено значение!"}</span> : null
            }
        </div>
    )
}

export default Input
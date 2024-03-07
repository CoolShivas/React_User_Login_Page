import React, { useRef, useImperativeHandle } from "react";
import classes from "./InputFields.module.css";


const InputFields = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            myFocus: activate,
        }
    })

    return <div
        className={`${classes.control} 
    ${props.isValid === false ? classes.invalid : ''}
    `}
    >
        <label htmlFor={props.id}> {props.label} </label>
        <input
            type={props.type}
            id={props.id}
            // value={enteredEmail}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    </div>
})

export default InputFields;
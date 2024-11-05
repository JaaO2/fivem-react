import React, {useState} from 'react'

function Input(props) {
  
    const [changed, setChanged] = useState(false);

    const defaultInput = (
        <>
            <div className="Login_input">
                <div className="Login_input_icon">
                    <i className={props.input.icon}></i>
                </div>
                <input value ={(!changed) ? props.input.value : null} onChange={e => setChanged(true)} type={props.input.type} name={props.input.name} placeholder={props.input.display} ref={props.input.ref} />
            </div>
            {props.error ? <span className="errorInput"><i className="fa-sharp fa-solid fa-circle-exclamation"></i> {props.error}</span> : null}
        </>
    )

    const checkbox = (
        <>
            <div className="Login_checkbox">
                <input defaultChecked={props.input.value} id={props.input.name} type={props.input.type} name={props.input.name}  ref={props.input.ref} />
                <label htmlFor={props.input.name}>{props.input.display}</label>
            </div>
            {props.error ? <span className="errorInput"><i className="fa-sharp fa-solid fa-circle-exclamation"></i> {props.error}</span> : null}
        </>
    )

    return (props.input.type === "checkbox" ? checkbox : defaultInput)
}

export default Input
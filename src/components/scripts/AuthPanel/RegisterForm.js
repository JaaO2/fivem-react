import React, {useRef, useState} from 'react'
import Input from './Input'
import Register from '../../../functions/authPanel/Register'

function RegisterForm() {

    const [errors, setErrors] = useState([]);
    const [registerPending, setRegisterPending] = useState(false);

    const buttonRef = useRef();

    const inputs = [
        {name: "username", type: "text", display: "Nazwa użytkownika", icon: "fa-solid fa-user", ref: useRef()},
        {name: "password", type: "password", display: "Hasło", icon: "fa-solid fa-key", ref: useRef()},
        {name: "password_repeat", type: "password", display: "Potwórz hasło", icon: "fa-solid fa-repeat", ref: useRef()},
        {name: "email", type: "email", display: "Adres email", icon: "fa-regular fa-at", ref: useRef()},
        {name: "rules", type: "checkbox", display: "Oświadczam, że zapoznałem się z regulaminem (zakładka regulamin) i akceptuję jego postanowienia.", icon: null, ref: useRef()},
    ]

    const register = async event => {
        
        setRegisterPending(true);
        const result = await Register(event, inputs);
        setErrors([]);
        
        if (result?.errors) {
            setErrors(result.errors)
        }

        setRegisterPending(false);

    }

    const getErrorField = (name) => {
        const errorResult = errors.find((error) => {
            return error.path === name;
        });

        return errorResult ? errorResult.msg : undefined;
    }
    

    return (
        <form onSubmit={e => register(e)}>
        <h1>Zakładanie konta</h1>

            {
                inputs.map((input) => <Input key={input.name} input={input} error={getErrorField(input.name)} />)
            }
            <button type='submit' disabled={registerPending}><i className="fa-solid fa-right-to-bracket" ref={buttonRef} ></i> {(registerPending) ? " Oczekiwanie na rejestrację..." : " Zarejestruj się"}</button>
        </form>
  )
}

export default RegisterForm
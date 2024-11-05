import React, {useState, useRef} from 'react'
import Register from './Register'
import ResetPassword from './ResetPassword'
import Input from './Input'
import LoginPassword from '../../../functions/authPanel/LoginPassword'

function LoginPasswordForm(props) {

    const inputs = [
        {name: "username", type: "text", display: "Nazwa użytkownika", icon: "fa-solid fa-user", ref: useRef(), value: (localStorage.getItem('rememberData')) ?  JSON.parse(localStorage.getItem('rememberData')).username : null},
        {name: "password", type: "password", display: "Hasło", icon: "fa-solid fa-key", ref: useRef(), value: (localStorage.getItem('rememberData')) ?  JSON.parse(localStorage.getItem('rememberData')).password : null },
        {name: "remember_me", type: "checkbox", display: "Zapamięaj mnie", icon: null, ref: useRef(), value: (localStorage.getItem('rememberData')) ? true : null},
    ]

    const [errors, setErrors] = useState([]);
    const [loginPending, setLoginPending] = useState(false);

    const Login = async event => {
      setLoginPending(true);
      const result = await LoginPassword(event, inputs);
      setErrors([]);
      
      if (result?.errors) {
        setErrors(result.errors);
      }

      setLoginPending(false);
    }

    const getErrorField = (name) => {
        const errorResult = errors.find((error) => {
            return error.path === name;
        });

        return errorResult ? errorResult.msg : undefined;
    }

    return (
        <form>
            {
                inputs.map((input) => <Input key={input.name} input={input} error={getErrorField(input.name)} />)
            }
            <button type='submit' disabled={loginPending} onClick={e => Login(e)}><i className="fa-solid fa-right-to-bracket"></i> {(loginPending) ? "Oczekiwanie na logowanie...": "Zaloguj się" }</button>
            <span className="Login_link" onClick = {e => props.setPage(<Register />)}>Nie masz jeszcze konta? <span className="Login_link_marked">Zarejestruj się</span></span>
            <span className="Login_link" onClick = {e => props.setPage(<ResetPassword />)}>Nie pamiętasz hasła? <span className="Login_link_marked">Zresetuj je teraz</span></span>
        </form>
  )
}

export default LoginPasswordForm
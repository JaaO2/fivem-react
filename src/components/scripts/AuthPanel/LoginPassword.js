import React, {useState} from 'react'
import LoginPasswordForm from './LoginPasswordForm';

function LoginPassword(props) {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
    <p className="loginInformation"><i className="fa-solid fa-circle-info"></i> Rejestrując się przez Discord lub Steam akceptujesz postanowienia regulaminu dostępnego w zakładce Regulamin.</p>
    <div className="Login_option" social={props.social}> 
        <div onClick={e => setShowForm(!showForm)} className="Login_option_title"><span className="Login_option_title_text"><i className="fa-duotone fa-circle-user"></i> Nazwa użytkownika i hasło</span><span className="Login_option_title_icon"><i className={"fa-solid " + (showForm ? 'fa-caret-up' : 'fa-caret-down')}></i></span></div>
        <div style={{display: (showForm ? 'flex' : 'none')}} className="Login_option_form">
            <LoginPasswordForm setPage = {props.setPage} />
        </div>
    </div>
    </>
  )
}

export default LoginPassword
import React from 'react'

function LoginSocial(props) {
  return (
    <div  className="Login_option" social={props.social}><div className="Login_option_title" social={props.social}><span className="Login_option_title_iconBrand"><i className={props.icon}></i></span><span className="Login_option_title_text"> Zaloguj się przez {props.social}</span></div></div>
  )
}

export default LoginSocial
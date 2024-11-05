import React from 'react'
import LoginPassword from './LoginPassword'
import LoginSocial from './LoginSocial'

function Login(props) {
    const options = [
        {name: "Discord", type: <LoginSocial social="Discord" icon = 'fa-brands fa-discord'/>},
        {name: "Steam", type: <LoginSocial social="Steam"  icon = 'fa-brands fa-steam'/>},
        {name: "Nazwa użytkownika i hasło", type: <LoginPassword setPage = {props.setPage} social='usernamepassword' />},
    ]

    return (
    <>
    <div className="Login">
        {options.map((option) => {
         return <React.Fragment key={option.name}>{option.type}</React.Fragment>
        }
        )}
    </div>
    </>
  )
}

export default Login
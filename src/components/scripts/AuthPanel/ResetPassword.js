import React from 'react'
import Input from './Input'

function ResetPassword() {
    const inputs = [
        {name: "email", type: "email", display: "Adres email", icon: "fa-solid fa-at"},

    ]

    return (
        <div className="ResetPassword">
            <form>
                <h1>Reset hasła</h1>
                {
                    inputs.map((input) => <Input key={input.name} input={input}/>)
                }
                <button type='submit'><i className="fa-solid fa-right-to-bracket"></i> Zresetuj hasło</button>
            </form>
        </div>
  )
}

export default ResetPassword
import React from 'react'
import Input from './Input'

function TwoFactor() {
    const inputs = [
        {name: "code", type: "code2fa", display: "6 - znakowy kod", icon: "fa-solid fa-shield-halved"},

    ]

    return (
        <div className="ResetPassword">
            <form>
                <h1>Dwuetapowa weryfikacja</h1>
                {
                    inputs.map((input) => <Input key={input.name} input={input}/>)
                }
                <button type='submit'><i className="fa-solid fa-right-to-bracket"></i> Zweryfikuj</button>
            </form>
        </div>
  )
}

export default TwoFactor
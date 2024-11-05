import React from 'react'
import Login from './Login'
import Information from './Information';
import Updates from './Updates';
import Rules from './Rules';

function menu(props) {
  
    const buttons = [
        {name: "Logowanie", component: <Login setPage={props.setPage}/>, icon: "fa-solid fa-right-to-bracket"},
        {name: "Informacje", component: <Information />, icon: "fa-solid fa-circle-info"},
        {name: "Aktualizacje", component: <Updates />, icon: "fa-sharp fa-solid fa-newspaper"},
        {name: "Regulamin", component: <Rules />, icon: "fa-solid fa-scale-balanced"},
    ];

    return (
    <div className="buttons">
        {buttons.map((button) => ( 
            <button key={button.name} onClick={e => props.setPage(button.component)}><i className={button.icon}></i> {button.name}</button>
        ))
        }
    </div>
  )
}

export default menu
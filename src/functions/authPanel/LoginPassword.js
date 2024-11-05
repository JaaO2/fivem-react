const LoginPassword = async (event, inputs) => {
    event.preventDefault();
    const values = {};
    inputs.forEach((input) => {
        values[input.name] = (input.type !== "checkbox") ? input.ref.current.value : input.ref.current.checked;
    });


    if (values.remember_me) {
        localStorage.setItem('rememberData', JSON.stringify({username: values.username, password: values.password}));
    } else {
        localStorage.removeItem('rememberData');
    }

    return await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(async data => await data)
    .catch(async error => await error);
    
}

export default LoginPassword;
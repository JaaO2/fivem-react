const Register = async (event, inputs) => {
    event.preventDefault();
    const values = {};
    inputs.forEach((input) => {
        values[input.name] = (input.type !== "checkbox") ? input.ref.current.value : input.ref.current.checked;
    });

    return await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(async data =>  await data)
    .catch(async error =>  await error);
};

export default Register;

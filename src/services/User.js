const url = 'https://codealo-commerce-cms.onrender.com';

export const registerUser = async (data) => {
    console.log('datos introduidos',data)
    const opciones = {
        method: 'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

   const user = await fetch(url + "/auth/local/register", opciones)
    .then(res => res.json())
    .catch(res =>{});

    console.log(user)
    return user;
}

export const loginUser = async (data) => {

    const opciones = {
        method: 'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

   const user = await fetch(url + "/auth/local", opciones)
    .then(res => res.json())
    .catch(res =>{});

    return user;
}
const fetchHeaderOptions = {
    'Content-Type': 'application/json',
    token: window.localStorage.getItem('token')
}


export async function login(userDetails) {
    const result = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: fetchHeaderOptions
    })
    return result.headers.get('token')
}
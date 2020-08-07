const fetchHeaderOptions = {
    'Content-Type': 'application/json',
    token: window.localStorage.getItem('token')
}


export async function login(userDetails) {
    const result = await fetch('/account/login', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: fetchHeaderOptions
    })
    return result.headers.get('token')
}

export async function register(userDetails) {
    const result = await fetch('/account/register', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: fetchHeaderOptions
    })
    return result.headers.get('token')
}

export async function addMedication(medicationDetails) {
    const result = await fetch('/medication/new', {
        method: 'POST',
        body: JSON.stringify(medicationDetails),
        headers: fetchHeaderOptions
    })
    const data = await result.json()
    return data
}
const headerOptions = {
    'Content-Type': 'application/json',
    token: window.localStorage.getItem('token')
}




export async function login(userDetails) {
    try {
        const result = await fetch('/account/login', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: headerOptions
        })
        return await result.json()
    } catch {
        return Promise.reject()
    }

}

export async function register(userDetails) {
    const result = await fetch('/account/register', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: headerOptions
    })
    return result.headers.get('token')
}

export async function addMedication(medicationDetails) {
    const result = await fetch('/medication/new', {
        method: 'POST',
        body: JSON.stringify(medicationDetails),
        headers: headerOptions
    })
    const data = await result.json()
    return data
}
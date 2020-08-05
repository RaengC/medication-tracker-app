import React, { useState } from 'react'
import { login } from '../Api'

function LoginPage(props) {

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            username: username,
            password: password,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    name='username'
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={username}
                />
            </label>

            <label>
                Password:
                <input
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                />
            </label>

            <input type='submit' value='Submit' />
        </form>
    )
}
export default LoginPage
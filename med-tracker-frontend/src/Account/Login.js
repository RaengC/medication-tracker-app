import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { login } from '../Api'

function LoginPage(props) {

    let history = useHistory()

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            username: username,
            password: password,
        }).then((token) => {
            setName('')
            setPassword('')
            props.setLoggin(true)
            history.push('/profile')

            //TO DO - does not stop if incorrect details added. 

        }).catch(e => {
            console.log(e)
            console.log('didnt log in')
            setName('')
            setPassword('')
            setError(true)
            //add error and stop if not correct
        })
    }

    return (
        <React.Fragment>
            {
                error &&
                <p>Login or Password Incorrect, please try again.</p>
            }

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Enter Username"
                        onChange={(e) => setName(e.currentTarget.value)}
                        value={username}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                    />
                </FormGroup>
                <Button input type="submit">Submit</Button>
            </Form>
        </React.Fragment>
    )
}
export default LoginPage
import React, { useState } from 'react'
import { register } from '../Api'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const RegisterUser = (props) => {

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        register({
            username: username,
            password: password,
            email: email
        })

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="Enter Username" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter Password" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter Email" />
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    );
}

export default RegisterUser
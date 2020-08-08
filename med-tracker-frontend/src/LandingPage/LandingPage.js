import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

function LandingPage() {
    let history = useHistory()
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome to your medication/supplement tracking app. Users can add new medication, with their daily dosage to track when medication is taken each day.</p>
                <hr className="my-2" />
                <p>Login or create account to get started.</p>
                <p className="lead">
                    <Button color="primary" onClick={() => { history.push('/login') }}>
                        Login
                </Button>
                    <Button color="primary" onClick={() => { history.push('/register') }}>
                        Create Account
                </Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default LandingPage
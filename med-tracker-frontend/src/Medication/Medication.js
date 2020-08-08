import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'


//need to not show unless user loggedin

const Medication = (props) => {
    let history = useHistory()

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome to your personal medication/supplement tracking app. </p>
                <hr className="my-2" />
                <p>Add your medication below to get started.</p>
                <p className="lead">
                    <Button color="primary" onClick={() => { history.push('/addMedication') }}>
                        Add Medication
                    </Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Medication
import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Medication = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome to your medication/supplement tracking app. Users can add new medication, with their daily dosage to track when medication is taken each day.</p>
                <hr className="my-2" />
                <p>Add your medication below to get started.</p>
                <p className="lead">
                    <Button color="primary">
                        Add Medication
                    </Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Medication
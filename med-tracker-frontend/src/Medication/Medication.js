import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { useHistory, Route, Switch } from 'react-router-dom'

import MedicationDisplay from './MedicationDisplay'



const Medication = (props) => {
    let history = useHistory()

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome, to your personal medication/supplement tracking app. </p>
                <hr className="my-2" />
                <p>Add your medication below to get started.</p>
                <p className="lead">
                    <Button color="primary" onClick={() => { history.push('/addMedication') }}>
                        Add Medication
                    </Button>
                </p>
            </Jumbotron>

            <Switch>
                <Route><MedicationDisplay /></Route>
            </Switch>

        </div>


    )
}

export default Medication
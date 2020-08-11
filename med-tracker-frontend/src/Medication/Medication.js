import React, { useState, useEffect } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import MedicationDisplay from './MedicationDisplay'
import { getMedicationsList } from '../Api'


const Medication = (props) => {

    const [medications, setMedications] = useState([])

    let history = useHistory()

    useEffect(() => {
        refreshMedicationList()

    }, [])

    const refreshMedicationList = async () => {
        const medList = await getMedicationsList()
        setMedications(medList)
    }


    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome, to your personal medication/supplement tracking app. </p>
                {/* <hr className="my-2" />
                <p>Add your medication below to get started.</p>
                <p className="lead">
                    <Button color="primary" onClick={() => { history.push('/addMedication') }}>
                        Add Medication
                    </Button>
                </p> */}
            </Jumbotron>

            <MedicationDisplay medications={medications} />

        </div>


    )
}

export default Medication
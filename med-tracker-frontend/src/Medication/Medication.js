import React, { useState, useEffect } from 'react'
import './Medication.css'
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

            <Jumbotron class='Jumbo'>
                <h1 className="display-3">Medication Tracker</h1>
                <p className="lead">Welcome, to your personal medication/supplement tracking app. </p>
            </Jumbotron>

            <MedicationDisplay medications={medications} />

        </div>
    )
}

export default Medication
import React, { useState, useEffect } from 'react'
import { Table, Button } from 'reactstrap';

import { getMedicationsList, editMedication } from '../Api'
import { Redirect } from 'react-router';

const EditList = (props) => {
    const [medications, setMedications] = useState([])
    const [editMedication, setEditMedication] = useState(null)

    useEffect(() => {
        refreshMedicationList()

    }, [])

    const refreshMedicationList = async () => {
        const medList = await getMedicationsList()
        setMedications(medList)
    }

    const editMed = (medID) => {
        console.log(medID)
        setEditMedication(medID)
    }

    return (

        <Table hover>
            <thead>
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Frequency Taken</th>
                    <th>Edit</th>
                </tr>
            </thead>

            {medications.map((medication) => {
                return (<tbody>
                    <tr >
                        <th scope="row" key={medication._id}>{medication.name}</th>
                        <td>{medication.dosage}</td>
                        <td>{medication.frequency}</td>
                        <td><Button onClick={() => editMed && <Redirect to={`/edit/${editMed}`} />} >
                            Select
                        </Button></td>
                    </tr>
                </tbody>
                )
            })}
        </Table >
    )
}

export default EditList
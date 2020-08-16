import React from 'react'
import { Table } from 'reactstrap';
import moment from 'moment'

const MedicationDisplay = (props) => {

    const medDaily = []
    props.medications.map((eachMed) => {

        if (eachMed.time.length) {
            eachMed.time.map(t => {
                const newMed = { ...eachMed }
                newMed.time = t
                medDaily.push(newMed)
            })
        }
    })
    console.log("medDaily", medDaily)


    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Schedule</th>
                    <th>Start Day</th>
                    <th>Time Taken</th>
                    <th>Notes</th>
                </tr>
            </thead>

            <tbody>
                {medDaily.length && medDaily.map((medication) => {

                    const date = moment(medication.startDate).format('dddd, YYYY-MM-DD')
                    const formateDateDisplay = moment(medication.startDate).format('dddd, Do MMM YYYY')

                    return (
                        <tr key={medication._id}>
                            <th scope="row" >{medication.name}</th>
                            <td>{medication.dosage}</td>
                            <td>{medication.frequency}</td>
                            <th>{formateDateDisplay}</th>
                            <td>{moment(`${date} ${medication.time}`).format('h:mm a')}</td>
                            <td>{medication.notes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    );
}

export default MedicationDisplay;
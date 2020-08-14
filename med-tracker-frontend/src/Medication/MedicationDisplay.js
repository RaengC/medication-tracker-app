import React from 'react'
import { Table } from 'reactstrap';
// import MedicationNew from './MedicationNew';
import moment from 'moment'

const MedicationDisplay = (props) => {

    let time = moment().format("dddd")

    return (

        <Table hover>
            <thead>
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Frequency Taken</th>
                    <th>Day</th>
                    <th>Time Taken</th>
                    <th>Notes</th>
                </tr>
            </thead>

            {props.medications.map((medication) => {
                return (<tbody>
                    <tr >
                        <th scope="row" key={medication._id}>{medication.name}</th>
                        <td>{medication.dosage}</td>
                        <td>{medication.frequency}</td>
                        <th>{medication.startDate}</th>
                        <td>{medication.time}</td>
                        <td>{medication.notes}</td>
                    </tr>
                </tbody>
                )
            })}

        </Table >

    );
}

export default MedicationDisplay;
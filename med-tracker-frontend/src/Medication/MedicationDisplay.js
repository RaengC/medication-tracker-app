import React from 'react'
import { Table } from 'reactstrap';

const MedicationDisplay = (props) => {

    return (
        // console.log(props)

        <Table hover>
            <thead>
                <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Frequency Taken</th>
                    <th>Time Taken</th>
                    <th>Notes</th>
                    {/* <th>Edit</th> */}
                </tr>
            </thead>

            {props.medications.map((medication) => {
                return (<tbody>
                    <tr >
                        <th scope="row" key={medication._id}>{medication.name}</th>
                        <td>{medication.dosage}</td>
                        <td>{medication.frequency}</td>
                        <td>{medication.time}</td>
                        <td>{medication.notes}</td>
                        {/* <td><Button onClick={() => props.editMed(medication._id)}>
                            Select
                            </Button></td> */}
                    </tr>
                </tbody>
                )
            })}

        </Table >

    );
}

export default MedicationDisplay;
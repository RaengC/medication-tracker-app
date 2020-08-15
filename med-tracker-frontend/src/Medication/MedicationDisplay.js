import React from 'react'
import { Table } from 'reactstrap';
// import MedicationNew from './MedicationNew';
import moment from 'moment'

const MedicationDisplay = (props) => {

    let time = moment().format("dddd")
    console.log('props', props.medications)



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

            <tbody>
                {props.medications.length && props.medications.map((medication) => {
                    console.log(medication)
                    const date = moment(medication.startDate).format('YYYY-MM-DD')
                    const times = medication.time.map((t) => {
                        return moment(`${date} ${t}`).format('h:mm a')
                        //wont have to loop through array if sperating times above to show individual line items
                    })
                    console.log('times', times)
                    //moment('2020 08 12 11:00').format('h:mm a')

                    return (
                        <tr key={medication._id}>
                            <th scope="row" >{medication.name}</th>
                            <td>{medication.dosage}</td>
                            <td>{medication.frequency}</td>
                            <th>{date}</th>
                            <td>{times.join(', ')}</td>
                            <td>{medication.notes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >

    );
}

export default MedicationDisplay;
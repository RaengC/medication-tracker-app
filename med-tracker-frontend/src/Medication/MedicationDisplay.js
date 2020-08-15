import React from 'react'
import { Table } from 'reactstrap';
// import MedicationNew from './MedicationNew';
import moment from 'moment'

const MedicationDisplay = (props) => {

    // let time = moment().format("dddd")

    // console.log('props', props.medications)
    // let alteredArray = props.medications.filter(medication => medication.time.length > 1).map(newArray => newArray)
    // console.log(alteredArray)


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


    //DISPLAYS each time as seperate object
    // let letEmpty = []
    // for (let i = 0; i < alteredArray.length; i++) {
    //     for (let j = 0; j < alteredArray[i].time[j].length; j++) {
    //         letEmpty.push(alteredArray[i].time[j])
    //     }
    //     letEmpty.push(alteredArray)
    // }

    //inside the j splice the time array, and then push to the empty array, then push the whole thing

    // console.log(letEmpty)


    // let times = alteredArray.map((a) => ({
    //     ["time"]: { ...a.time },
    // })
    // )


    /*
    create new array, const new array = [] to loop though time array and display each line with complete data
    as a seperate entry. push into the array here.  
    new array = props.medications { 
        if (medication.time.length > 1){
            loop through 
            then new array.push()
        }
    }
    */

    // const newArray = []
    // newArray = props.medications.length && props.medications.map((medication) => {
    //     if (medication.time.length > 1) {
    //         for (let i = 0; i < time.length; i++) {
    //             console.log([i])
    //         }
    //     } else {
    //         console.log('nothing')
    //     }
    // })

    // NEED to calculate Daily, Weekly into convertable time
    // const daily = moment(medication.frequency('Daily')).format('dddd')
    // const currentDay = medication.frequency.map((day) => {
    //     // if ('Daily') {
    //     return moment(`${daily} ${day}`).format('dddd')
    //     // }
    // })

    // const scheduledDay = medication.frequency.map(() => {
    //     if ("Daily") {
    //         return
    //     }
    // })

    // moment('2020 08 12 11:00').format('h:mm a')

    // const something = props.medications.filter((medication) => {
    //     medication.time.length > 1
    // })
    // console.log(something)
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
                    // console.log(medication)

                    const date = moment(medication.startDate).format('dddd, YYYY-MM-DD')
                    // const times = medication.time.map((t) => {
                    //     return moment(`${date} ${t}`).format('h:mm a')
                    //     //wont have to loop through array if sperating times above to show individual line items
                    // })
                    // console.log('times', times)

                    return (
                        <tr key={medication._id}>
                            <th scope="row" >{medication.name}</th>
                            <td>{medication.dosage}</td>
                            <td>{medication.frequency}</td>
                            <th>{date}</th>
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
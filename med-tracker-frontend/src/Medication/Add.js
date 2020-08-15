import React, { useState } from 'react'
import { addMedication } from '../Api'
import MedicationNew from '../Medication/MedicationNew'
import FormCompleteMsg from './FormCompleteMsg'

function Add() {
    const [submitMsg, setSubmitMsg] = useState({ msg: '', state: false })
    const [redirectHome, setRedirectHome] = useState(false)


    const addMedicationHandler = async (medDetails) => {
        try {
            const med = await addMedication(medDetails)
            console.log(med)
            setSubmitMsg({ msg: 'Medication added, add another or go to profile.', state: true })
        } catch (e) {
            console.log(e)
            setSubmitMsg({ msg: 'Something went wrong, try again.', state: false })
        }
    }

    return (
        <React.Fragment>
            <MedicationNew submitHandler={addMedicationHandler}
                pageTitle={'Enter Medication'}
                medication={{
                    name: '',
                    totalQuantity: '',
                    dosage: '',
                    startDate: '',
                    frequency: '',
                    time: '',
                    reminder: '',
                    notes: ''
                }} />
            <FormCompleteMsg submitMsg={submitMsg}
                setRedirectHome={setRedirectHome}
                redirectHome={redirectHome}
            />
        </React.Fragment>
    )

}

export default Add
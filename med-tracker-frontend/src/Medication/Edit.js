import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import { getMedicationById, editMedication } from '../Api'
import MedicationNew from './MedicationNew'

function Edit(props) {


    let { id } = useParams()
    console.log('id ', id)
    let [medication, setMedication] = useState(null)

    const [submitMsg, setSubmitMsg] = useState({ msg: '', state: false })
    const [redirectHome, seRedirectHome] = useState(false)


    useEffect(() => {
        getMedication()
    }, [])

    const getMedication = async () => {
        const data = await getMedicationById(id)
        console.log('edit page id ' + id)
        setMedication(data.data)
    }


    const submitHandler = async (medData) => {
        try {
            const data = await editMedication(medication._id, medData)
            setSubmitMsg({ msg: "Medication Updated, edit another?", state: true })
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <React.Fragment>
            {
                !medication && <p>loading...</p>
            }
            {
                medication && <MedicationNew pageTitle={'Edit Medication'}
                    medication={medication} submitHandler={submitHandler} />
            }


        </React.Fragment>
    )
}

export default Edit
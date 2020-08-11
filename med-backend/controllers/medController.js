const express = require('express')
const router = express.Router()
const Medication = require('../models/newMedication')


//Get all - show all medications
router.get('/', async (req, res) => {
    // console.log(req.body, ' this is getting all meds')
    try {
        const allMedications = await Medication.find()

        res.json({
            status: {
                code: 200,
                message: 'Success'
            },
            data: allMedications
        })
    } catch (e) {
        res.send(e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editMedication = await Medication.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json({
            status: {
                code: 201,
                message: "Medication edited"
            },

            data: editMedication

        })
    } catch (e) {
        res.send(e)
    }
})

router.post('/new', async (req, res) => {
    req.body.owner = req.session.userId
    try {
        const createMedication = await Medication.create(req.body)
        res.json({
            status: {
                code: 201,
                message: "New Medication created"
            },
            data: createMedication
        })
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

module.exports = router
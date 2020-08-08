const express = require('express')
const router = express.Router()
const Medication = require('../models/newMedication')

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
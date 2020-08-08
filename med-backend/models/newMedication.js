const mongoose = require('mongoose')

const MedicationSchema = new mongoose.Schema({
    name: String,
    totalQuantity: String,
    dosage: String,
    frequency: String,
    timeTaken: String,
    notes: String,
    fiveMin: String,
    fifteenMin: String,
    noReminder: String,
})

module.exports = mongoose.model('Medication', MedicationSchema)
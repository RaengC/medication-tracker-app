const mongoose = require('mongoose')

const MedicationSchema = new mongoose.Schema({
    name: String,
    totalQuantity: String,
    dosage: String,
    frequency: String,
    startDate: Date,
    time: [],
    reminder: [Number],
    notes: String,

    owner: {
        type: String,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Medication', MedicationSchema)
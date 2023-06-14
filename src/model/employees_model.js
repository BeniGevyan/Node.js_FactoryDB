const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        start_work_year: { type: Number, required: true },
        department: { type: mongoose.Schema.Types.ObjectId, ref: 'departments' },
        shift: [{ type: mongoose.Schema.Types.ObjectId, ref: 'departments' }]
    },
    { versionKey: false }
)
const employee = mongoose.model('employees', employeesSchema)
module.exports = employee
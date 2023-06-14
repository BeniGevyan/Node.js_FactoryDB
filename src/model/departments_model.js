const mongoose = require('mongoose');


const departmentsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        manager: { type: mongoose.Schema.Types.ObjectId, ref: 'employees',required: true },
       

    },
    { versionKey: false }
)
const department = mongoose.model('departments', departmentsSchema)
module.exports = department
const mongoose = require('mongoose');


const departmentsSchema = new mongoose.Schema(
    {
        name: String,
        manager: {type:mongoose.Schema.Types.ObjectId , ref : 'employees'},
    },
    { versionKey: false }
)
const department = mongoose.model('departments', departmentsSchema)
module.exports = department
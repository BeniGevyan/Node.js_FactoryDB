const mongoose = require('mongoose');


const employeesSchema = new mongoose.Schema(
    {

        first_name: String,
        last_name: String,
        start_work_year: Number,
        department: {type:mongoose.Schema.Types.ObjectId , ref : 'departments'},

    },
    { versionKey: false }
)
const employee = mongoose.model('employees', employeesSchema)
module.exports = employee
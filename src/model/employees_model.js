const mongoose = require('mongoose');


const employeesSchema = new mongoose.Schema(
    {
        _id:{type:mongoose.Schema.Types.ObjectId},
        first_name: String,
        last_name: String,
        start_work_year: Number,
        department_id: {type:mongoose.Schema.Types.ObjectId , ref : 'departments'},
        shifts_id:{type:mongoose.Schema.Types.ObjectId , ref : 'shifts'}

    },
    { versionKey: false }
)
const employee = mongoose.model('employees', employeesSchema)
module.exports = employee
const mongoose = require('mongoose');


const employeesSchema = new mongoose.Schema(
    {
        First_Name: String,
        Last_Name: String,
        Start_Work_Year: Number,
        Department_Id: {type:mongoose.Schema.Types.ObjectId , ref : 'Departments'},
        Shifts_Id:{type:mongoose.Schema.Types.ObjectId , ref : 'Shifts'}

    },
    { versionKey: false }
)
const employee = mongoose.model('Employees', employeesSchema)
module.exports = employee
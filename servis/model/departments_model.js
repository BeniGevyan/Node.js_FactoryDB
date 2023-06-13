const mongoose = require('mongoose');


const departmentsSchema = new mongoose.Schema(
    {
        Name: String,
        Manager_Id: {type:mongoose.Schema.Types.ObjectId , ref : 'Employees'},
        Employees_Id: [{type:mongoose.Schema.Types.ObjectId , ref : 'Employees'}]

    },
    { versionKey: false }
)
const department = mongoose.model('Departments', departmentsSchema)
module.exports = department
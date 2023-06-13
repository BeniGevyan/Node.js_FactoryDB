const mongoose = require('mongoose');


const ShiftsSchema = new mongoose.Schema(
    {
        Date: String,
        Starting_Hour: String,
        Ending_Hour: String,
        Employees_Id: [{type:mongoose.Schema.Types.ObjectId , ref : 'Employees'}]

    },
    { versionKey: false }
)
const Shift = mongoose.model('Shifts', ShiftsSchema)
module.exports = Shift
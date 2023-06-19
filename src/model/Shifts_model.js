const mongoose = require('mongoose');


const ShiftsSchema = new mongoose.Schema(
    {
        date: String,
        starting_hour: Number,
        ending_hour: Number
    },
    { versionKey: false }
)
const Shift = mongoose.model('shifts', ShiftsSchema)
module.exports = Shift
const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema(
    {
        Full_Name: String,
        User_name: String,
        Email: String,
        Phone: String,
        Num_Of_Actions: Number
    },
    { versionKey: false }
)
const user = mongoose.model('Users', usersSchema)
module.exports = user
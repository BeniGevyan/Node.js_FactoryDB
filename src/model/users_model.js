const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema(
    {
        full_name: String,
        num_of_actions: Number,
        // Not In The Requirement
        user_name: String,
        email: String,
        phone: String
    },
    { versionKey: false }
)
const user = mongoose.model('users', usersSchema)
module.exports = user
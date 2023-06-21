const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema(
    {
        full_name: String,
        user_name: String,
        email: String,
        phone: String,
        num_of_actions: Number
    },
    { versionKey: false }
);
const user = mongoose.model('users', usersSchema);
module.exports = user;
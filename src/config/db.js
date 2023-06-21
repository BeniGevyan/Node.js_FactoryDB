const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/FactoryDB')
        .then(() => console.log('conneted to mongodb !'))
        .catch((error) => console.log('error messg ', error));
};

module.exports = connectDB;

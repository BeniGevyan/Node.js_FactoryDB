const SHIFT = require('../model/shifts_model');
const { validAddShift } = require('../config/validation');
const mongodb = require('mongodb');


//get
const getAllShift = async () => {
    try {
        const shifts = await SHIFT.aggregate([{
            $lookup:
            {
                from: "employees",
                localField: "_id",
                foreignField: "shift",
                as: "employees"
            }
        }]);
        return shifts[0] ? shifts :"No content exists"
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

//get shift by id
const gatShiftById = async (id) => {
    try {
        const shift = await SHIFT.aggregate([
            { $match: { _id: new mongodb.ObjectId(id) } }
            , {
                $lookup:
                {
                    from: "employees",
                    localField: "_id",
                    foreignField: "shift",
                    as: "employees"
                }
            }]);
        return shift;
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

//add shift

const addShift = async (obj) => {
    try {
        validAddShift(obj);
        const shift = new SHIFT(obj);
        await shift.save();
        return 'Created!';
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

// update shift

const updatedShift = async (id, obj) => {
    try {
        await SHIFT.findByIdAndUpdate(id, obj);
        return "update";
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

// Delete shift

// const deleteShift = async (id) => {
//     console.log('deleteShift');
//     try {
//         await SHIFT.findByIdAndDelete(id)
//         return "Delete";
//     } catch (error) {
//         return "Something is wrong, check again"
//     }
// }


module.exports = { getAllShift, gatShiftById, addShift, updatedShift };
const SHIFT = require('../model/shifts_model');
const { validAddShift } = require('../config/validation');
const mongodb = require('mongodb');


//get
const getAllShift = async () => {
    try {
        console.log('getAllShift');
        const shifts = await SHIFT.aggregate([{
            $lookup:
            {
                from: "employees",
                localField: "_id",
                foreignField: "shift",
                as: "employees"
            }
        }])
        return shifts
    } catch (error) {
        return "Something is wrong, check again"
    }

}
//get shift by id
const gatShiftById = async (id) => {
    try {
        console.log('gatShiftById 1111');

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
            }])
        return shift
    } catch (error) {
        console.log(error);
        return "Something is wrong, check again"
    }

}

//add shift

const addShift = async (obj) => {
    console.log("addShift");
    try {
        validAddShift(obj)
        const shift = new SHIFT(obj);
        await shift.save();
        return 'Created!';

        // return checkShift
    } catch (error) {
        console.error(error.message);
        return error.message

    }
}

// update shift

const updatedShift = async (id, obj) => {
    console.log('updatedShift');
    try {
        await SHIFT.findByIdAndUpdate(id, obj)
        return "update";
    } catch (error) {
        return "Something is wrong, check again"
    }
}

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
const JF = require('jsonfile');
const SHIFT = require('../model/shifts_model')


//get
const getAllShift = async () => {
    try {
        console.log('getAllShift');
        const shifts = await SHIFT.find({})
        return shifts
    } catch (error) {
        return "Something is wrong, check again"
    }

}
//get shift by id
const gatShiftById = async (id) => {
    try {
        console.log('gatShiftById');
        const shift = await SHIFT.find({ _id: id })
        return shift
    } catch (error) {
        return "Something is wrong, check again"
    }

}

//add shift

const addShift = async (obj) => {
    console.log("addShift");
    try {
        const dpe = new SHIFT(obj);
        await dpe.save();
        return 'Created!';
    } catch (error) {
        return "Something is wrong, check again"
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

const deleteShift = async (id) => {
    console.log('deleteShift');
    try {
        await SHIFT.findByIdAndDelete(id)
        return "Delete";
    } catch (error) {
        return "Something is wrong, check again"
    }
}


module.exports = { getAllShift, gatShiftById, addShift, updatedShift, deleteShift };
const express = require('express');
const SHIFT = require('../bll/shiftBLL');

const ShiftsRouter = express.Router();

/*get shifts*/
ShiftsRouter.route('/').get(async (req, res) => {
    try {
        const shifts = await SHIFT.getAllShift()
        res.json(shifts)
    } catch (error) {
        return "Something is wrong, check again"
    }
});
/*get shift b id*/
ShiftsRouter.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const shifts = await SHIFT.gatShiftById(id);
        res.json(shifts)
    } catch (error) {
        return "Something is wrong, check again"

    }
});

/*add shifts*/

ShiftsRouter.route('/').post(async (req, res) => {
    try {
        console.log('POST');
        const newShifts = req.body;
        console.log(newShifts);
        const result = await SHIFT.addShift(newShifts)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500);

    }
});

/*Update shifts */

ShiftsRouter.route('/:id').put(async (req, res) => {
    try {
        console.log("put");
        const { id } = req.params;
        const newShifts = req.body;
        const result = await SHIFT.updatedShift(id, newShifts)
        res.json(result)
    } catch (error) {
        return "Something is wrong, check again"
    }
});

/*Delete shifts */

ShiftsRouter.route('/:id').delete(async (req, res) => {
    try {
        console.log("delete");
        const { id } = req.params;
        const result = await SHIFT.deleteShift(id);
        res.json(result)
    } catch (error) {
        return "Something is wrong, check again"
    }
});


module.exports = ShiftsRouter; 

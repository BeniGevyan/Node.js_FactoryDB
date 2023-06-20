const express = require('express');
const SHIFT = require('../bll/shiftBLL');

const ShiftsRouter = express.Router();

/*get shifts*/
ShiftsRouter.route('/').get(async (req, res) => {
    try {
        const shifts = await SHIFT.getAllShift()
        res.json(shifts)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        return
    }
});
/*get shift b id*/
ShiftsRouter.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const shifts = await SHIFT.gatShiftById(id);
        res.json(shifts)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        return
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
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        return
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
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        return
    }
});

/*Delete shifts */

ShiftsRouter.route('/:id').delete(async (req, res) => {
    try {
        console.log("delete");
        const { id } = req.params;
        const result = await SHIFT.deleteShift(id);
        res.json(result)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        return
    }
});


module.exports = ShiftsRouter; 

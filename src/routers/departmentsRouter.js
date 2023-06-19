const express = require('express');
const DEPARTMENTS = require('../bll/departmentsBLL');


const DepartmentsRouter = express.Router();

/* get departments */
DepartmentsRouter.route('/').get(async (req, res, next) => {
    console.log("1");
    try {
        const departments = await DEPARTMENTS.getAllDepartments();

        res.json(departments)
    } catch (error) {
        return "Something is wrong, check again"
    }
});

/* get department by id */

DepartmentsRouter.route('/:id').get(async (req, res, next) => {
    try {
        const { id } = req.params;
        const departments = await DEPARTMENTS.gatDepartmentsById(id);
        res.json(departments)
   
    } catch (error) {
        // console.log(error.Error);
        res.status(400).json("Something is wrong, check again")
       
    }
    next(req, res)
});

/*add department*/

DepartmentsRouter.route('/').post(async (req, res) => {
    try {
        console.log('POST');
        const newDepartments = req.body;
        const result = await DEPARTMENTS.addDepartments(newDepartments)
        res.json(result)
    } catch (error) {
        res.status(400).json("Something is wrong, check again")

    }
});

/*Update department */

DepartmentsRouter.route('/:id').put(async (req, res) => {
    console.log("put");
    try {
        const { id } = req.params;
        const newDepartments = req.body;
        const result = await DEPARTMENTS.updatedDepartments(id, newDepartments)
        res.json(result)
    } catch (error) {

        return "Something is wrong, check again"
    }
});

/*Delete department */

DepartmentsRouter.route('/:id').delete(async (req, res) => {
    try {
        console.log("delete");
        const { id } = req.params;
        const result = await DEPARTMENTS.deleteDepartments(id);
        res.json(result)
    } catch (error) {
        return "Something is wrong, check again"
    }
});


module.exports = DepartmentsRouter; 

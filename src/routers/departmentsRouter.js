const express = require('express');
const DEPARTMENTS = require('../bll/departmentsBLL');
const logger = require('../config/logger');


const DepartmentsRouter = express.Router();

/* get departments */
DepartmentsRouter.route('/').get(async (req, res) => {
    try {
        const departments = await DEPARTMENTS.getAllDepartments();
        res.json(departments)
        logger(req,res)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        logger(req,res)
        return
    }
});

/* get department by id */

DepartmentsRouter.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const departments = await DEPARTMENTS.gatDepartmentsById(id);
        res.json(departments)
        logger(req,res)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        logger(req,res)
        return
    }

});

/*add department*/

DepartmentsRouter.route('/').post(async (req, res) => {
    try {
        const newDepartments = req.body;
        const result = await DEPARTMENTS.addDepartments(newDepartments)
        res.json(result)
        logger(req,res)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        logger(req,res)
        return
    }
});

/*Update department */

DepartmentsRouter.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const newDepartments = req.body;
        const result = await DEPARTMENTS.updatedDepartments(id, newDepartments)
        res.json(result)
        logger(req,res)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        logger(req,res)
        return
    }
});

/*Delete department */

DepartmentsRouter.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const result = await DEPARTMENTS.deleteDepartments(id);
        res.json(result)
        logger(req,res)
        return
    } catch (error) {
        res.status(400).json("Something is wrong, check again")
        logger(req,res)
        return
    }
});


module.exports = DepartmentsRouter; 

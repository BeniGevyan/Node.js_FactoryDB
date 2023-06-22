const express = require('express');
const EMPLOYEES = require('../bll/employeesBLL');
const logger = require('../config/logger');

const EmployeesRouter = express.Router();

/* get employees */
EmployeesRouter.route('/').get(async (req, res, next) => {
        try {
                const employees = await EMPLOYEES.getAllEmployees();
                res.json(employees);
                logger(req, res);
                return;
        } catch (error) {
                res.status(400).json("Something is wrong, check again");
                logger(req, res);
                return;
        }

});


/* get employee by id */
EmployeesRouter.route('/:id').get(async (req, res, next) => {
        try {
                const { id } = req.params;
                const employees = await EMPLOYEES.gatEmployeesById(id);
                res.json(employees);
                logger(req, res);
                return;
        } catch (error) {
                res.status(400).json("Something is wrong, check again");
                logger(req, res);
                return;
        };
});

/*add employees*/
EmployeesRouter.route('/').post(async (req, res, next) => {
        try {
                const newEmployees = req.body;
                const result = await EMPLOYEES.addEmployees(newEmployees)
                res.json(result);
                logger(req, res);
                return;
        } catch (error) {
                res.status(400).json("Something is wrong, check again");
                logger(req, res);
                return;
        };
});

/*Update employees */
EmployeesRouter.route('/:id').put(async (req, res, next) => {
        try {
                const { id } = req.params;
                const newEmployees = req.body;
                const result = await EMPLOYEES.updatedEmployees(id, newEmployees)
                res.json(result);
                logger(req, res);
                return;
        } catch (error) {
                res.status(400).json("Something is wrong, check again");
                logger(req, res);
                return;
        };
});

/*Delete employees */
EmployeesRouter.route('/:id').delete(async (req, res, next) => {
        try {
                const { id } = req.params;
                const result = await EMPLOYEES.deleteEmployees(id);
                res.json(result);
                logger(req, res);
                return;
        } catch (error) {
                res.status(400).json("Something is wrong, check again");
                logger(req, res);
                return;
        };
});


module.exports = EmployeesRouter; 

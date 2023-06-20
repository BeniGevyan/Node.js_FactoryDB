const express = require('express');
const EMPLOYEES = require('../bll/employeesBLL');

const EmployeesRouter = express.Router();

/* get employees */
EmployeesRouter.route('/').get(async (req, res) => {
        try {
                const employees = await EMPLOYEES.getAllEmployees();
                res.json(employees)
                return
        } catch (error) {
                res.status(400).json("Something is wrong, check again")
                return
        }

});


/* get employee by id */
EmployeesRouter.route('/:id').get(async (req, res) => {
        try {
                const { id } = req.params;
                const employees = await EMPLOYEES.gatEmployeesById(id);
                res.json(employees)
                return
        } catch (error) {
                res.status(400).json("Something is wrong, check again")
                return
        }
});

/*add employees*/
EmployeesRouter.route('/').post(async (req, res) => {
        try {
                const newEmployees = req.body;
                const result = await EMPLOYEES.addEmployees(newEmployees)
                res.json(result)
                return
        } catch (error) {
                res.status(400).json("Something is wrong, check again")
                return
        }
});

/*Update employees */
EmployeesRouter.route('/:id').put(async (req, res) => {
        try {
                const { id } = req.params;
                const newEmployees = req.body;
                const result = await EMPLOYEES.updatedEmployees(id, newEmployees)
                res.json(result)
                return
        } catch (error) {
                res.status(400).json("Something is wrong, check again")
                return
        }
});

/*Delete employees */
EmployeesRouter.route('/:id').delete(async (req, res) => {
        try {
                const { id } = req.params;
                const result = await EMPLOYEES.deleteEmployees(id);
                res.json(result)
                return
        } catch (error) {
                res.status(400).json("Something is wrong, check again")
                return
        }
});


module.exports = EmployeesRouter; 

const express = require('express');
const EMPLOYEES = require('../bll/employeesBLL');

const EmployeesRouter = express.Router();

/* get employees */
EmployeesRouter.route('/').get(async (req, res) => {
        const employees = await EMPLOYEES.getAllEmployees();
        res.json(employees)

});

/* get employee by id */
EmployeesRouter.route('/:id').get(async (req, res) => {
        const { id } = req.params;
        const employees = await EMPLOYEES.gatEmployeesById(id);
        res.json(employees)
});

/*add employees*/
EmployeesRouter.route('/').post(async (req, res) => {
        console.log('POST');
        const newEmployees = req.body;
        const result = await EMPLOYEES.addEmployees(newEmployees)
        res.json(result)
});

/*Update employees */
EmployeesRouter.route('/:id').put(async (req, res) => {
        try {
            console.log("put");
            const { id } = req.params;
            const newEmployees = req.body;
            const result = await EMPLOYEES.updatedEmployees(id, newEmployees)
            res.json(result)
        } catch (error) {
            console.log("error");
        }
});

/*Delete employees */
EmployeesRouter.route('/:id').delete(async (req, res) => {
        console.log("delete");
        const { id } = req.params;
        const result = await EMPLOYEES.deleteEmployees(id);
        res.json(result)
});


module.exports = EmployeesRouter; 

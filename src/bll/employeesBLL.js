const { validAddEmploy } = require('../config/validation');
const EMPLOYEES = require('../model/employees_model');
const mongodb = require('mongodb');


//get
const getAllEmployees = async () => {
    try {
        const employees = await EMPLOYEES.aggregate([{
            $lookup:
            {
                from: "departments",
                localField: "department",
                foreignField: "_id",
                as: "department"
            }
        }, {
            $lookup:
            {
                from: "shifts",
                localField: "shift",
                foreignField: "_id",
                as: "shift"
            }
        }
        ]);
        return employees[0] ? employees : "No content exists";
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

//get employee by id
const gatEmployeesById = async (id) => {
    try {
        const employee = await EMPLOYEES.aggregate([
            { $match: { _id: new mongodb.ObjectId(id) } }
            , {
                $lookup:
                {
                    from: "departments",
                    localField: "department",
                    foreignField: "_id",
                    as: "department"
                }
            }, {
                $lookup:
                {
                    from: "shifts",
                    localField: "shift",
                    foreignField: "_id",
                    as: "shift"
                }
            }
        ]);
        return employee[0] ? employee : "employee id does not exist";
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

//add employee

const addEmployees = async (obj) => {
    try {
        let checkObj = await validAddEmploy(obj);
        if (checkObj) {
            const dpe = new EMPLOYEES(obj);
            await dpe.save();
            return 'Created!';
        };
        return checkObj;
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

// update employee

const updatedEmployees = async (id, obj) => {
   
    try {
        if (Object.keys(obj).length) {
            const x = await EMPLOYEES.findByIdAndUpdate(id, obj);
            console.log(x);
            return "update";
        };
        return "Missing data";
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};

// Delete employee

const deleteEmployees = async (id) => {
    try {
        if (!(id.length === 24)) { return "Incorrect information" };
        const del = await EMPLOYEES.findByIdAndDelete(id);
        if (!del) { return "Incorrect information" };
        return "Delete ";
    } catch (error) {
        error.messages('Something is wrong, check again');
        return error;
    };
};



module.exports = { getAllEmployees, gatEmployeesById, addEmployees, updatedEmployees, deleteEmployees };
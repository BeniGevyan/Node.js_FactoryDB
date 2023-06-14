const { validAddEmploy } = require('../config/validation');
const EMPLOYEES = require('../model/employees_model');
const mongodb = require('mongodb');

//get
const getAllEmployees = async () => {
    console.log('getAllEmployees');
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
                from: "shift",
                localField: "shift",
                foreignField: "_id",
                as: "shift"
            }
        }
        ])
        return employees
    } catch (error) {
        return "Something is wrong, check again"
    }
}
//get employee by id
const gatEmployeesById = async (id) => {
    try {
        console.log('gatEmployeesById');
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
                    from: "shift",
                    localField: "shift",
                    foreignField: "_id",
                    as: "shift"
                }
            }
        ])
        return employee;
    } catch (error) {
        return "Something is wrong, check again"
    }

}

//add employee

const addEmployees = async (obj) => {
    console.log('addEmployees');
    try {
        let checkObj = await validAddEmploy(obj)
        if (checkObj) {
            const dpe = new EMPLOYEES(obj);
            await dpe.save();
            return 'Created!';
        }
        return checkObj

    } catch (error) {
        console.log(error);
        return "Something is wrong, check again"
    }

}

// update employee

const updatedEmployees = async (id, obj) => {
    console.log('updatedEmployees');
    try {
        await EMPLOYEES.findByIdAndUpdate(id, obj)
        return "update";
    } catch (error) {
        return "Something is wrong, check again"
    }
}

// Delete employee

const deleteEmployees = async (id) => {
    console.log('deleteEmployees');
    try {
        await EMPLOYEES.findByIdAndDelete(id)
        return "Delete ";
    } catch (error) {
        return "Something is wrong, check again"
    }
}



module.exports = { getAllEmployees, gatEmployeesById, addEmployees, updatedEmployees, deleteEmployees };
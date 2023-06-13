const JF = require('jsonfile');
const EMPLOYEES = require('../model/employees_model');
const getEmploeeaddDB = require('../getEmploee');


//get
const getAllEmployees = async () => {
    console.log('getAllEmployees');
    await getEmploeeaddDB()
    try {
        const employees = await EMPLOYEES.find({})
        // const employees = await EMPLOYEES.aggregate([{
        //     $lookup:
        //     {
        //         from: "Departments",
        //         localField: "Department_Id",
        //         foreignField: "_id",
        //         as: "Departments"
        //     }
        // },{
        //     $lookup:
        //     {
        //         from: "Shifts",
        //         localField: "Shifts_Id",
        //         foreignField: "_id",
        //         as: "Shifts"
        //     }
        // }
        // ])
        return employees
    } catch (error) {
        return "Something is wrong, check again"
    }
}
//get employee by id
const gatEmployeesById = async (id) => {
    console.log('gatEmployeesById');
    try {
        // const employee = await EMPLOYEES.findById({ _id: id })
         // const employees = await EMPLOYEES.aggregate([{ _id: id },{
        //     $lookup:
        //     {
        //         from: "Departments",
        //         localField: "Department_Id",
        //         foreignField: "_id",
        //         as: "Departments"
        //     }
        // },{
        //     $lookup:
        //     {
        //         from: "Shifts",
        //         localField: "Shifts_Id",
        //         foreignField: "_id",
        //         as: "Shifts"
        //     }
        // }
        // ])
        return employee;
    } catch (error) {
        return "Something is wrong, check again"
    }

}

//add employee

const addEmployees = async (obj) => {
    console.log('addEmployees');
    try {
        const dpe = new EMPLOYEES(obj);
        await dpe.save();
        return 'Created!';
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
const JF = require('jsonfile');
const DEPARTMENTS = require('../model/departments_model');
const EMPLOYEES = require('../model/employees_model');
// const { gatEmployeesById } = require('./employeesBLL');


//get
const getAllDepartments = async () => {
    try {
        const departments = await DEPARTMENTS.aggregate([{
            $lookup:
            {
                from: "Employees",
                localField: "ManagerId",
                foreignField: "_id",
                as: "Manager"
            }
        }, {
            $lookup:
            {
                from: "Employees",
                localField: "Employees_Id",
                foreignField: "_id",
                as: "EmployeesDpar"
            }
        }])
        return departments
    } catch (error) {
        return "Something is wrong, check again"
    }
}
//get department by id
const gatDepartmentsById = async (id) => {

    try {
        console.log('gatDepartmentsById');
        let department = await DEPARTMENTS.find({ _id: id });
        // if (department.employees_Id.length ) {
        //  department = await DEPARTMENTS.find({ _id: id }).aggregate({
        //     $lookup:
        //     {
        //         from: "employees",
        //         localField: "employees_Id",
        //         foreignField: "_id",
        //         as: "employeesdpar"
        //     }
        // })
        // }
        return department ? department : "department id does not exist";

    } catch (error) {
        return "Something is wrong, check again"
    }

}

//add department

const addDepartments = async (obj) => {
    try {
        console.log("addDepartments");
        const dpe = new DEPARTMENTS(obj);
        await dpe.save();
        return 'Created!';
    } catch (error) {
        return "Something is wrong, check again"
    }
}

// update department

const updatedDepartments = async (id, obj) => {
    try {
        console.log("updatedDepartments");
        await DEPARTMENTS.findByIdAndUpdate(id, obj)
        return "update";
    } catch (error) {
        return "Something is wrong, check again"
    }
}

// Delete department

const deleteDepartments = async (id) => {
    try {
        console.log("deleteDepartments");
        await DEPARTMENTS.findByIdAndDelete(id)
        return "Delete";
    } catch (error) {
        return "Something is wrong, check again"
    }
}


module.exports = { getAllDepartments, gatDepartmentsById, addDepartments, updatedDepartments, deleteDepartments };
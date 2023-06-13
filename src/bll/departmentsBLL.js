const DEPARTMENTS = require('../model/departments_model');
const mongodb = require('mongodb');

const getAllDepartments = async () => {
    try {
        const departments = await DEPARTMENTS.aggregate([{
            $lookup:
            {
                from: "employees",
                localField: "manager",
                foreignField: "_id",
                as: "manager"
            }
        }, {
            $lookup:
            {
                from: "employees",
                localField: "employees",
                foreignField: "_id",
                as: "employees"
            }
        }])
        return departments
    } catch (error) {
        return "Something is wrong, check again"
    }
}

const gatDepartmentsById = async (id) => {
    try {
        console.log('gatDepartmentsById');
        let department = await DEPARTMENTS.aggregate([
            { $match: { _id: new mongodb.ObjectId(id) } }
            , {
                $lookup:
                {
                    from: "employees",
                    localField: "manager",
                    foreignField: "_id",
                    as: "manager"
                }
            }, {
                $lookup:
                {
                    from: "employees",
                    localField: "employees",
                    foreignField: "_id",
                    as: "employees"
                }
            }
        ])

        return department ? department : "department id does not exist";

    } catch (error) {
        console.error("Something is wrong, check again");
        return error;
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
        console.log(obj);
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
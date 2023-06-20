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
                localField: "_id",
                foreignField: "department",
                as: "employees"
            }
        }
        ])
        return departments[0] ? departments : "No content exists";
    } catch (error) {
        error.messages('Something is wrong, check again')
        return error
    }
}

const gatDepartmentsById = async (id) => {
    try {
        const department = await DEPARTMENTS.aggregate([
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
                    localField: "_id",
                    foreignField: "department",
                    as: "employees"
                }
            }
        ])
        return department[0] ? department : "department id does not exist";
    } catch (error) {
        error.messages('Something is wrong, check again')
        return error
    }
}

//add department

const addDepartments = async (obj) => {
    try {
        if (!obj.name.trim() || !obj.manager.trim()) {
            return "Missing department name or manger ";
        }
        const dpe = new DEPARTMENTS(obj);
        await dpe.save();
        return 'Created!';
    } catch (error) {
        error.messages('Something is wrong, check again')
        return error
    }
}

// update department

const updatedDepartments = async (id, obj) => {
    try {
        if (Object.keys(obj).length) {
            await DEPARTMENTS.findByIdAndUpdate(id, obj)
            return "update";
        }
        return "Missing data"
    } catch (error) {
        error.messages('Something is wrong, check again')
        return error
    }
}

// Delete department

const deleteDepartments = async (id) => {
    try {
        if (!(id.length === 24)) { return "Incorrect information" }

        const del = await DEPARTMENTS.findByIdAndDelete(id)

        if (!del) { return "Incorrect information" }

        return "Delete";
    } catch (error) {
        error.messages('Something is wrong, check again')
        return error
    }
}


module.exports = { getAllDepartments, gatDepartmentsById, addDepartments, updatedDepartments, deleteDepartments };
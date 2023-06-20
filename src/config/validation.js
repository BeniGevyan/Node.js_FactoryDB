const { Error } = require("mongoose")
const DEPARTMENTS = require("../model/departments_model")
const EMPLOYEES = require("../model/employees_model")

const validAddEmploy = async (obj) => {
    if (obj.firstName.trim() && obj.lastName.trim() && isYearValid(obj.start_work_year)) {
        const dpe = await DEPARTMENTS.find({ _id: obj.id })
        if (dpe) {
            return true
        }
        throw new Error("It is necessary to check the id of the department")
    }
    throw new Error(`It is necessary to check the entered data 
    (first name, last name, year of work start (number))`)

}

const isYearValid = (year) => {
    if (year.length != 4) return false;
    if (!year.match(/\d{4}/)) return false;
    if (parseInt(year) > new Date().getFullYear() || parseInt(year) < 1900) return false;
    return true;
}

const validAddShift = (obj) => {
    if (!isDateValid(obj.date)) {
        console.log("The selected date is incorrect");
        throw new Error("The selected date is incorrect")
    }
    const starting_hour = obj.starting_hour
    const ending_hour = obj.ending_hour
    if ((0 > starting_hour > 18) || ((starting_hour + 6) > ending_hour)) {
        throw new Error("The selected time is incorrect")
    }
}


const isDateValid = (shiftData) => {
    const data = new Date(shiftData);
    if (!(Date.parse(data))) {
        return false
    }
    if (data < new Date()) {
        return false
    }
    return true
}

module.exports = { validAddEmploy, validAddShift }


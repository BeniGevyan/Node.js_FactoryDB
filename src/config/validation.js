const { Error } = require("mongoose")
const DEPARTMENTS = require("../model/departments_model")
const EMPLOYEES = require("../model/employees_model")

const validAddEmploy = async (obj) => {
    if (obj.firstName.trim() && obj.lastName.trim() && isYearValid(obj.start_work_year)) {
        const dpe = await DEPARTMENTS.find({ _id: obj.id })
        if (dpe) {
            return true
        }
        return Error.messages("It is necessary to check the id of the department")
    }
    return Error.messages(`It is necessary to check the entered data 
    (first name, last name, year of work start (number))`)

}

const isYearValid = (year) => {
    if (year.length != 4) return false;
    if (!year.match(/\d{4}/)) return false;
    if (parseInt(year) > new Date().getFullYear() || parseInt(year) < 1900) return false;
    return true;
}

const validAddShift = (obj) => {
    if (obj.date.trim() && obj.starting_hour.trim() && obj.ending_hour.trim()) {

        return true
    }
    return Error.messages(`It is necessary to check the entered data (date, start time, end time)`)
}


module.exports = { validAddEmploy, validAddShift }
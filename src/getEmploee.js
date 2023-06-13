const { get } = require('axios');
const jf = require('jsonfile');
const EMPLOYEES = require('./model/employees_model')


const getEmploeeaddDB = async () => {

    let EMPLOYEES = await get(`https://hub.dummyapis.com/employee?noofRecords=2&idStarts=1001`)
    console.log();
    // const x = EMPLOYEES.map(async (employee) => {
    //     const objUser = {
    //         Employee_Id: employee.id,
    //         First_Name: employee.First_Name,
    //         Last_Name: employee.Last_Name,
    //         Start_Work_Year: employee.dob
    //     }
    //     return objUser
    // })
    // await jf.writeFile('./', EMPLOYEES)
    console.log("getEmploeeaddDB");
}






module.exports = getEmploeeaddDB
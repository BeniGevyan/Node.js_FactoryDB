const { get } = require('axios');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const USERS_DB = require('../model/users_model')



const gatUserByIdWs = async (ID) => {
    let data = await get(`${URL_USERS}/${ID}`);
    let { id, name: FullName, username, email, phone } = data.data
    const user = { id, FullName, username, email, phone }
    console.log(user);
    return user ? user : "user id does not exist";
}

const addUserDb = async (userName, Email) => {
    try {
        let data = await get(`${URL_USERS}/?username=${userName}&email=${Email}`);
        let { name: FullName, username, email, phone } = data.data[0]
        const obj = { FullName, username, email, phone }
        const user = new USERS_DB(obj);
        await user.save();
        return 'Created!';
    } catch (error) {
        console.log(error);
    }
}

const gatUsersByIdDb = async (id) => {
    try {
        console.log('gatUsersByIdDb');
        const department = await USERS_DB.find({ id: id })
        return department ? department : "department id does not exist";

    } catch (error) {
        return "Something is wrong, check again"
    }
}

const getUserByUsernameEmail = async (userName, Email) => {
    try {
        let data = await get(`${URL_USERS}/?username=${userName}&email=${Email}`);
        let { id, name: FullName, username, email, phone } = data.data[0]
        const obj = { id, FullName, username, email, phone }
        return obj;
    } catch (error) {
        return (error);
    }
}



module.exports = { gatUserByIdWs, addUserDb, gatUsersByIdDb, getUserByUsernameEmail };

// const updatedPasswordUsersDb = async (username, newPassword) => {
//     try {
//         let user = await USERS_DB.find({ _username: username });
//         user.Password = newPassword;
//         await user.save();
//         return "update";
//     } catch (error) {
//         return "Something is wrong, check again"
//     }
// }

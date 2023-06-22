const jf = require('jsonfile');
const { get } = require('axios');
const { gatUserByIdWs } = require('../bll/usersBLL.JS');
const path = require("path");
const { error } = require('console');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const FILE_USERS_ACTIONS = path.resolve(__dirname + "../../dbJsons/permissions.Json");

const compareDates = (a, b) => a.toDateString() === b.toDateString();


const currentDate = new Date();

const emptyPermissions = {
    "date": { currentDate },
    "ACTION": []
};

const resetPermissions = async () => {
    try {
        let permissions = await jf.readFile(FILE_USERS_ACTIONS);
        if (!permissions) {
            await jf.writeFile(FILE_USERS_ACTIONS, emptyPermissions);
            return;
        };
        const needPermissions = !compareDates(new Date(), new Date(permissions.date));
        if (needPermissions) {
            permissions.ACTION = new Date();
            permissions.ACTION = [];
            await jf.writeFile(FILE_USERS_ACTIONS, permissions);
        }
    } catch (error) {
        console.log(error);
    }

}

const amountPermissions = async (id) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const user = permissions.ACTION.find((action) => action.id === id);

    if (user.maxActions > user.action.length) {
        return true;
    };

    return false;
};

const updatePermissions = async (userId, obj) => {
    let permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const employee = permissions.ACTION.findIndex((action) => action.id === userId);
    permissions.ACTION[employee].action = [...permissions.ACTION[employee].action, obj];
    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
    return 'Done!';
};


// const addUser = async (id) => {
//     const user = await gatUserByIdWs(id)
//     const permissions = await jf.readFile(FILE_USERS_ACTIONS);

//     users = {
//         id: user.id,
//         name: user.FullName,
//         maxActions: 5,
//         action: []
//     };

//     permissions.ACTION.push(users);
//     await jf.writeFile(FILE_USERS_ACTIONS, permissions);
// }

const CheckExistUser = async (user) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const test = permissions.ACTION[0];

    if (permissions.action[0]) {
        const findId = permissions.ACTION.find(peron => peron.id === user.id);
        if (findId) {
            return 'User already exists'
        };
    };

    const data = {
        id: user.id,
        name: user.FullName,
        maxActions: 5,
        action: []
    };

    permissions.ACTION.push(data);
    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
};


module.exports = { amountPermissions, updatePermissions, CheckExistUser, resetPermissions };
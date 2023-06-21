const jf = require('jsonfile');
const { get } = require('axios');
const { gatUserByIdWs } = require('../bll/usersBLL.JS');
const path = require("path");
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const FILE_USERS_ACTIONS = path.resolve(__dirname + "../../dbJsons/permissions.Json");

const date = new Date()
const emptyPermissions = {
    "date": { date },
    "action": []
}


const resetPermissions = async () => {
    console.log('ResetPermissions Start');
    try {
        let permissions = await jf.readFile(FILE_USERS_ACTIONS);
        if (!permissions) {
            await jf.writeFile(FILE_USERS_ACTIONS, emptyPermissions);
            console.log('ResetPermissions End 1');
            return
        }
        console.log("1111111", new Date());
        // console.log("222222", action);
        if (!(permissions.date === new Date())) {
            permissions.date = new Date();
            permissions.action = [];
            console.log(permissions);
            await jf.writeFile(FILE_USERS_ACTIONS, permissions);
            console.log('ResetPermissions End 2');
            // return
        }
    } catch (error) {
        console.log(error);
    }

}

const amountPermissions = async (id) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const user = permissions.action.find((action) => action.id === id);
    if (user) {
        addUser(id)
    }
    if (user.maxActions > user.action.length) {
        return true
    }
    return false
}

const updatePermissions = async (obj) => {
    let permissions = jf.readFile(FILE_USERS_ACTIONS);
    const employee = permissions.action.findindex((action) => action.id === obj.id);
    permissions[employee].action = [...permissions[employee].action, obj.action]
    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
    return 'Done!';
};


const resrch = async () => {

    let { data: users } = await get(`${URL_USERS}`)
    users = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            maxActions: 5,
            action: []
        }
    })

    await jf.writeFile(FILE, {
        "action": [
            users
        ]
    });
    console.log('den');
}

const CheckExistUser = async (user) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const test = permissions.action[0]

    if (permissions.action[0]) {
        const findId = permissions.action.find(peron => peron.id === user.id)
        if (findId) {
            return 'User already exists'
        }
    }

    const data = {
        id: user.id,
        name: user.name,
        maxActions: 5,
        action: []
    }

    permissions.action.push(data)

    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
}


module.exports = { amountPermissions, updatePermissions, resrch, CheckExistUser, resetPermissions };
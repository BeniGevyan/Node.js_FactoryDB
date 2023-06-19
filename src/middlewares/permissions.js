const jf = require('jsonfile');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const { get } = require('axios');
const FILE_USERS_ACTIONS = `${__dirname}/../dbJsons/actions.json`


const amountPermissions = async (id) => {
    const actions = await jf.readFile(FILE_USERS_ACTIONS);
    const user = actions.action.find((action) => action.id === id);
    if (user.maxActions > user.action.length) {
        return true
    }
    return false
}
const updatePermissions = async (obj) => {
    let actions = jf.readFile(FILE_USERS_ACTIONS);
    const employee = actions.action.findindex((action) => action.id === obj.id);
    actions[employee].action = [...actions[employee].action, obj.action]
    await jf.writeFile(FILE_USERS_ACTIONS, actions);
    return 'Done!';
};


const resrch = async () => {
    console.log('getAllUsersWs');
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

const addUser = async (user) => {
    console.log('getAllUsersWs');
    const data = {
        id: user.id,
        name: user.name,
        maxActions: 5,
        action: []
    }
    let obj = {
        "action": [
        ]
    }
    const actions = await jf.readFile(FILE_USERS_ACTIONS);
    const test = actions.action[0]
    if (actions.action[0]) {
        const findId = actions.action.find(peron => peron.id === user.id)
        if (findId) {
            throw new Error('User already exists')
        }
    }
    obj.action.push(data)

    await jf.writeFile(FILE_USERS_ACTIONS, obj);
    console.log('The user is registered');
}

module.exports = { amountPermissions, updatePermissions, resrch, addUser };
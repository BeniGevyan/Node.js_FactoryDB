const jf = require('jsonfile');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const { get } = require('axios');
const FILE_USERS_ACTIONS = `${__dirname}/../dbJsons/actions.json`


const amountPermissions = async (id) => {
    const actions = await jf.readFile(FILE_USERS_ACTIONS);
    const employee = actions.action.find((action) => action.id === id);
    if (employee.maxActions > employee.action.length) {
        return true
    }
    return false
}
const updatePermissions = async (obj) => {
    const actions = jf.readFile(FILE_USERS_ACTIONS);
    const employee = actions.action.findindex((action) => action.id === obj.id);
    actions[employee].action = [...actions[employee].action, obj.action]
    await jf.writeFile(FILE_USERS_ACTIONS, OBJ);
    return 'Done!';
};


const resrch = async () => {
    console.log('getAllUsersWs');
    let { data: users } = await get(`${URL_USERS}`)
    users = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
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
module.exports = {  amountPermissions, updatePermissions, resrch };
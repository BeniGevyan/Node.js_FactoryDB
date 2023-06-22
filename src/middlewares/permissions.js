const jf = require('jsonfile');
const path = require("path");
const FILE_USERS_ACTIONS = path.resolve(__dirname + "../../dbJsons/permissions.Json");

const compareDates = (a, b) => a.toDateString() === b.toDateString();

const resetPermissions = async () => {
    try {
        let permissions = await jf.readFile(FILE_USERS_ACTIONS);
        if (!permissions) {
            const emptyPermissions = {
                date: new Date(),
                allActions: []
            };
            await jf.writeFile(FILE_USERS_ACTIONS, emptyPermissions);
            return;
        };
        const needPermissions = !compareDates(new Date(), new Date(permissions.date));
        if (needPermissions) {
            permissions.date = new Date();
            permissions.allActions = [];
            await jf.writeFile(FILE_USERS_ACTIONS, permissions);
        }
    } catch (error) {
        console.log(error);
    }

}

const amountPermissions = async (id) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const user = permissions.allActions.find((action) => action.id === id);

    if (user.maxActions > user.userAction.length) {
        return true;
    };

    return false;
};

const updatePermissions = async (userId, obj) => {
    let permissions = await jf.readFile(FILE_USERS_ACTIONS);
    const employee = permissions.allActions.findIndex((action) => action.id === userId);
    permissions.allActions[employee].userAction = [...permissions.allActions[employee].userAction, obj];
    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
    return 'Done!';
};

const CheckExistUser = async (user) => {
    const permissions = await jf.readFile(FILE_USERS_ACTIONS);

    if (permissions.allActions.length) {
        const findId = permissions.allActions.find(peron => peron.id === user.id);
        console.log(findId);
        if (findId) {
            return 'User already exists'
        };
    };

    const data = {
        id: user.id,
        name: user.fullName,
        maxActions: 5,
        userAction: []
    };
   

    permissions.allActions.push(data);
 
    await jf.writeFile(FILE_USERS_ACTIONS, permissions);
};


module.exports = { amountPermissions, updatePermissions, CheckExistUser, resetPermissions };
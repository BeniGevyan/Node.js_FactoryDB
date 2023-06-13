const express = require('express');
const USERS = require('../bll/usersBLL.JS');


const UsersRouter = express.Router();

/*GET users ws*/
UsersRouter.route('/').get(async (req, res) => {
    try {
        let users = await USERS.getAllUsersWs();
        res.json(users)
    } catch (error) {
        console.log(error);
    }
});

/*GET users DB*/

UsersRouter.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await USERS.gatUsersByIdDb(id);
        res.json(user)
    } catch (error) {
        return 'Something is wrong, check again'
    }
});

/*ADD user ws*/

UsersRouter.route('/').post(async (req, res) => {
    try {
        const { email, username } = req.body;
        let user = await USERS.addUserDb(username, email);
        res.json(user)
    } catch (error) {
        return 'Something is wrong, check again'
    }
})

// UsersRouter.route('/').put(async (req, res) => {
//     try {
//         const { username, oldPassword, newPassword } = req.body;
//         USERS.updatedPasswordUsersDb(username, oldPassword, newPassword)
//         return "update";
//     } catch (error) {
//         return 'Something is wrong, check again'
//     }
// })

module.exports = UsersRouter;



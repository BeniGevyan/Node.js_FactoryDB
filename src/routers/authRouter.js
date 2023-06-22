const express = require('express');
require('dotenv').config();
const JWT = require('jsonwebtoken');
const USERS_DB = require('../model/users_model');
const { getUserByUsernameEmail } = require('../bll/usersBLL.JS');
const { CheckExistUser } = require('../middlewares/permissions');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET_TOKEN;

const authRouter = express.Router();

authRouter.route('/').post(async (req, res) => {

    const { username, email } = req.body;
    // console.log(process.env.ACCESS_SECRET_TOKEN);

    try {
        let user = await getUserByUsernameEmail(username, email);
        await CheckExistUser(user);
        if (user) {
            if (user.email === email) {
                const userId = user.id;
                const accessToken = JWT.sign(
                    { id: userId },
                    ACCESS_TOKEN_SECRET
                    // { expiresIn: 7200 } // expires after 7200s (2 hours)
                );
                res.json({ accessToken });
            };
            res.status(401).json("Invalid login data"); // Unauthorized
        };
        res.status(401).json("Invalid login data"); // Unauthorized
    } catch (error) {
        // console.error(error.message);
        return res.status(412).json(error.message);
    };
});



module.exports = authRouter;
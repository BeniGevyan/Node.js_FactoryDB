const express = require('express');
require('dotenv').config();
const JWT = require('jsonwebtoken');
const { CheckExistUser } = require('../middlewares/permissions');
const { getUserByUsernameEmail } = require('../bll/usersBLL');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET_TOKEN;

const authRouter = express.Router();

authRouter.route('/').post(async (req, res) => {
    const { username, email } = req.body;
    try {
        let user = await getUserByUsernameEmail(username, email);
        
        await CheckExistUser(user);
        if (user) {
            console.log('111111');
            if (user.email === email) {
                console.log('22222222');
                const userId = user.id;
                const accessToken = JWT.sign(
                    { id: userId },
                    ACCESS_TOKEN_SECRET
                );
                res.json({ accessToken });
            };
            res.status(401).json("Invalid login data"); // Unauthorized
        };
        res.status(401).json("Invalid login data"); // Unauthorized
    } catch (error) {

        return res.status(412).json(error.message);
    };
});



module.exports = authRouter;
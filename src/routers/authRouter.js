const express = require('express');
const JWT = require('jsonwebtoken');
const USERS_DB = require('../model/users_model')


const authRouter = express.Router();

authRouter.route('/').post(async (req, res) => {
    const { Username, Email } = req.body;
    try {
        let user = await USERS_DB.find({ "Username": Username });
        if (user) {
            if (user[0].Email === Email) {
                const userId = user.id
                const ACCESS_SECRET_TOKEN = 'someKey';
                const accessToken = JWT.sign(
                    { id: userId },
                    ACCESS_SECRET_TOKEN
                    // { expiresIn: 7200 } // expires after 7200s (2 hours)
                );
                res.json({ accessToken });
            }
            res.status(401).json("Invalid login data"); // Unauthorized

        }
        res.status(401).json("Invalid login data"); // Unauthorized
    } catch (error) {
        console.log(error);
    }
});



module.exports = authRouter
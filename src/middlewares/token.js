const JWT = require('jsonwebtoken');
const { amountPermissions } = require('./permissions');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET_TOKEN;

const testToken = async (req, res, next) => {

    const token = req.headers['x-access-token']
    if (!token) {
        return res.status(401).json('No Token Provided!');
    };
    await JWT.verify(token, ACCESS_TOKEN_SECRET, async (err, data) => {
        if (err) {
            return res.status(403).json('Failed to authenticate token');
        };
        const Permissions = await amountPermissions(data.id)
      
        if (Permissions) {

            req.dataUser = data.id;
            next();
            return
        };

        return res.status(401).json('Not enough permissions');
    });
};



module.exports = testToken;
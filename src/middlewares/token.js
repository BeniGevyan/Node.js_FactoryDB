const JWT = require('jsonwebtoken');
const { amountPermissions } = require('./permissions');


// jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

const testToken = (req, res, next) => {
    const ACCESS_SECRET_TOKEN = 'someKey';
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json('No Token Provided!');
    }
    JWT.verify(token, ACCESS_SECRET_TOKEN, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(403).json('Failed to authenticate token');
        }

        if (amountPermissions(data.id)) {
            req.data = data
            next()
        }
        
        return res.status(401).json('Not enough permissions')
    });
}



module.exports = testToken
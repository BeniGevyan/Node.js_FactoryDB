const JWT = require('jsonwebtoken');
const { amountPermissions } = require('./permissions');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET


// jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

const testToken = (req, res, next) => {
   
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json('No Token Provided!');
    }
    JWT.verify(token, ACCESS_TOKEN_SECRET, (err, data) => {
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
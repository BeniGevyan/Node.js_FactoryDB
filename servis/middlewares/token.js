const JWT = require('jsonwebtoken');
const ACCESS_SECRET_TOKEN = 'someKeyy';



const testToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        JWT.verify(token, ACCESS_SECRET_TOKEN, (err, data) => {
            if (err) {
                res.status(500).json('Failed to authenticate token');
            }
            res.status(202)
        });
    }
    res.status(401).json('No Token Provided!');
}



module.exports = testToken
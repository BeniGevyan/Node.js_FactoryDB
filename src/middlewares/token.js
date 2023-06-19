const JWT = require('jsonwebtoken');



const testToken = (req, res, next) => {
    const ACCESS_SECRET_TOKEN = 'someKey';
    const token = req.headers['x-access-token'];
    console.log(token);
    if (token) {
        JWT.verify(token, ACCESS_SECRET_TOKEN, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json('Failed to authenticate token');
            }
            console.log(data)
        });
    }
    res.status(401).json('No Token Provided!');
    next()
}



module.exports = testToken
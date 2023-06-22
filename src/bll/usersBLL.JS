const { get } = require('axios');
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

const getUserByUsernameEmail = async (userName, Email) => {
    try {
        let data = await get(`${URL_USERS}/?username=${userName}&email=${Email}`);
        let { id, name: fullName, username, email, phone } = data.data[0];
        const obj = { id, fullName, username, email, phone };
        return obj;
    } catch (error) {
        return (error);
    };
};

module.exports = {getUserByUsernameEmail};

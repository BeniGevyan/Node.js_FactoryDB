const express = require('express');
const { updatePermissions } = require("../middlewares/permissions");

const logger = async (req, res, next) => {
    if (res.statusCode !== 200) {
        return "false";
    };
    const data = await PreparationInformation(req);
    console.log(data);
    await updatePermissions(data);
    next();
};

const PreparationInformation = async (req) => {
    const { url, method } = req;
    const x = new Date();
    const data = {
        "data": `${x.getDate()}/${x.getMonth()}/${x.getFullYear()}  ${x.getHours()}:${x.getMinutes()}`,
        "action": ''
    };
    const myArray = url.split("/");

    if (method === 'GET' && myArray[2]) {
        data.action = ` ${method} ${myArray[1]} by id`;
    } else {
        data.action = `${method} ${myArray[1]}`;
    }
    return data;
};

module.exports = logger;


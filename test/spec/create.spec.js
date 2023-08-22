const request = require("supertest");
const config = require('../../data/config.json')

async function createUser(payload,token){
    const response = await request(config.baseUrl)
    .post('/users')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}


async function createUnit(payload,token){
    const response = await request(config.baseUrl)
    .post('/units')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}

module.exports = {createUser,createUnit}


const request = require("supertest");
const config = require('../../data/config.json')

async function updateUser(payload,token){
    const response = await request(config.baseUrl)
    .post('/users')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}

module.exports = {updateUser}


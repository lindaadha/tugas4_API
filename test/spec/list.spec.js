const request = require("supertest");
const config = require('../../data/config.json')

async function userList(token){
    const response = await request(config.baseUrl)
    .get('/users')
    .set("Authorization", `Bearer ${token}`)
    return response
}


async function unitList(token){
    const response = await request(config.baseUrl)
    .get('/units')
    .set("Authorization", `Bearer ${token}`)
    console.log((await response).body.data.units.id)
    return response
}

module.exports = {userList, unitList}
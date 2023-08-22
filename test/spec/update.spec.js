const request = require("supertest");
const config = require('../../data/config.json');
const { userList } = require("./list.spec");

async function updateUserList(id, payload, token){
    const response = await request(config.baseUrl)
    .put('/users/'+id)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)

    const list = await userList(token)
    console.log((await list).body.data.users);

    return response
}

async function updateUnitList(id, payload, token){
    const response = await request(config.baseUrl)
    .put('/units/'+id)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)

    const list = await userList(token)
    console.log((await list).body.data.units);

    return response
}

module.exports = {updateUserList, updateUnitList}


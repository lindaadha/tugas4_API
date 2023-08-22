const request = require("supertest");
const config = require('../../data/config.json');
const { userList } = require("./list.spec");

async function delUserList(id, token){
    const response = await request(config.baseUrl)
    .del('/users/'+id)
    .set("Authorization", `Bearer ${token}`)

    const list = await userList(token)
    console.log((await list).body.data.users);

    return response
}

async function delUnitList(id, token){
    const response = await request(config.baseUrl)
    .del('/units/'+id)
    .set("Authorization", `Bearer ${token}`)

    const list = await userList(token)
    console.log((await list).body.data.units);

    return response
}

module.exports = {delUserList, delUnitList}


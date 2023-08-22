const request = require("supertest");
const userData = require('../../data/user.data.json')
const config = require('../../data/config.json')

async function userId(){
    const response = await request(config.baseUrl) //BASEURL
    .post("/authentications") //ENDPOINT
    .send(userData)
    // const token 
    const id_user = await response.body.data.user.id
    console.log(await id_user)
    return id_user
}

async function unitId(){
    const response = await request(config.baseUrl) //BASEURL
    .post("/authentications") //ENDPOINT
    .send(userData)
    // const token 
    const id_unit = await response.body.data.units.id
    console.log(await id_unit)
    return id_unit
}

module.exports = { userId, unitId }
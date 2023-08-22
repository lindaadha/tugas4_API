const request = require("supertest");
const { expect } = require("chai");
const config = require('../../data/config.json')
const userData = require('../../data/registration.json')

// const BASEURL = "https://kasir-api.belajarqa.com"

// async function getToken(payload){
//     const response = await request(BASEURL)
//     .post("/authentications")
//     .send(payload)
//     return response
// }
describe("Regist Feature", () => {
    it('Success Regist', async () => {
        const response = await request(config.baseUrl)
        .post("/registration")
        .send(userData)
        console.log((await response).status);
        console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
    })
})
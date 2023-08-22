const request = require("supertest");
const { expect } = require("chai");
const config = require('../../data/config.json')
const userData = require('../../data/user.data.json')

describe("Login Feature", () => {
    it('Success Login', async () => {
        const response = await request(config.baseUrl)
        .post("/authentications")
        .send(userData)
        
        // console.log((await response).status);
        // console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
    })

    it('Failed Login', async () => {
        const response = await request(config.baseUrl)
        .post("/authentications")
        .send({
            "email": "testing@mail.com",
            "password": "testing123",          
        })
        // console.log((await response).status);
        // console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(401);
    })
})

const request = require("supertest");
const { expect } = require("chai");

const BASEURL = "https://kasir-api.belajarqa.com"

async function getToken(payload){
    const response = await request(BASEURL)
    .post("/authentications")
    .send(payload)
    return response
}
describe("Login Feature", () => {
    it('Success Login', async () => {
        const payload = {
            "email": "testing@mail.com",
            "password": "123",          
        }
        const response = await getToken(payload)
        // console.log((await response).status);
        // console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
        expect((await response).body.data.user.name).to.equal("Toko Testing")
    })

    it('Failed Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com")
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

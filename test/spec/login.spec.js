const request = require("supertest");
const { expect } = require("chai");

describe("Login Feature", () => {
    it('Success Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/authentications")
        .send({
            "email": "testing@mail.com",
            "password": "123",          
        })
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

describe('Get User', ()=> {
    const queryPage = 2
    it('Success Get User Detail', async ()=> {
        const response = await request('https://reqres.in')
        .get(`/api/users`+`?page=${queryPage}`)
        .del()
        // .set()
        console.log((await response).status);
        console.log((await response).body);
    })
    
})
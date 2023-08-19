const { expect } = require("chai");
const { getToken } = require("../spec/get.token.spec");
const { createUser } = require("../spec/create.user.spec");

describe('Create User', () => {
    it('Succcess create a new user', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "name": "Toko Coba",
            "email": "toko@example.com",
            "password": "tokocoba"
         }
         
        const response = await createUser(payload,token)
        //Assert
        expect((await response).status).to.equal(201);
        expect((await response).body.data.name).to.equal(payload.name); //DATA DRIVEN TESTING
    })
})

describe('Update User', () => {
    it('Success update user', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "name": "Toko Coba",
            "email": "toko@example.com",
            "password": "tokocoba"
         }
         
        const response = await createUser(payload,token)
        //Assert
        expect((await response).status).to.equal(201);
        expect((await response).body.data.name).to.equal(payload.name); //DATA DRIVEN TESTING
    })
})
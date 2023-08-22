const { expect } = require("chai");
const { getToken } = require("../spec/get.token.spec");
const { createUser } = require("../spec/create.spec");
const { userList } = require("../spec/list.spec");
const { userId } = require("../spec/id.spec");
const { updateUserList } = require("../spec/update.spec");
const { delUserList } = require("../spec/del.spec");


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
    it('Failed create a new user without Name', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "email": "toko@example.com",
            "password": "tokocoba"
         }
         
        const response = await createUser(payload,token)
        //Assert
        expect((await response).status).to.equal(400);
    
    })
})

describe('List User', () => {
    it('Success get list user', async () => {
        //Get Token
        const token = await getToken()
        //Response List         
        const response = await userList(token)
        //Assert
        expect((await response).status).to.equal(200);
    })
})

describe('Update User', () => {
    it('Success update user', async () => {
        //Get Token, Id
        const token = await getToken()
        const user_Id = await userId()
        //Update User
        const payload = {
            "name": "Toko Testing Coba2",
            "email": "testing@mail.com"
         }
        //Response List         
        const response = await updateUserList(user_Id, payload, token)
        //Assert
        expect((await response).status).to.equal(200);
    })
    it('Failed update user with non filled name', async () => {
        //Get Token, Id
        const token = await getToken()
        const user_Id = await userId()
        //Update User
        const payload = {
            "email": "testing@mail.com"
         }
        //Response List         
        const response = await updateUserList(user_Id, payload, token)
        //Assert
        expect((await response).status).to.equal(400);
    })
})

describe('Delete User', () => {
    it('Success delete user', async () => {
        //Get Token, Id
        const token = await getToken()
        const user_Id = await userId()
        //Response List         
        const response = await delUserList(user_Id, token)
        //Assert
        expect((await response).status).to.equal(200);
    })
})
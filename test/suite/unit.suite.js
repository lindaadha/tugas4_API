const { expect } = require("chai");
const { getToken } = require("../spec/get.token.spec");
const { createUnit } = require("../spec/create.spec");
const { unitList } = require("../spec/list.spec");
const { unitId } = require("../spec/id.spec");
const { updateUnitList } = require("../spec/update.spec");
const { delUnitList } = require("../spec/del.spec");


describe('Create Unit', () => {
    it('Succcess create a new unit', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "name": "gram",
            "description": "weight measurement"
         }
         
        const response = await createUnit(payload,token)
        //Assert
        expect((await response).status).to.equal(201);
        expect((await response).body.data.name).to.equal(payload.name); //DATA DRIVEN TESTING
    
    })
    it('Failed create a new unit without Name', async () => {
        //Get Token
        const token = await getToken()
        //Create unit
        const payload = {
            "description": "weight measurement"
         }
         
        const response = await createUnit(payload,token)
        //Assert
        expect((await response).status).to.equal(400);
    
    })
})

describe('List Unit', () => {
    it('Success get list unit', async () => {
        //Get Token
        const token = await getToken()
        //Response List         
        const response = await unitList(token)
        //Assert
        expect((await response).status).to.equal(200);
    })
})

describe('Update Unit', () => {
    it('Success update unit', async () => {
        //Get Token, Id
        const token = await getToken()
        const unit_Id = await unitId()
        //Update unit
        const payload = {
            "name": "update-meter",
            "description": "no-meter"
         }
         
        //Response List         
        const response = await updateUnitList(unit_Id, payload, token)
        //Assert
        expect((await response).status).to.equal(200);
    })
    it('Failed update unit with non filled name', async () => {
        //Get Token, Id
        const token = await getToken()
        const unit_Id = await unitId()
        //Update User
        const payload = {
            "description": "no-meter"
         }
         
        //Response List         
        const response = await updateUnitList(unit_Id, payload, token)
        //Assert
        expect((await response).status).to.equal(400);
    })
})

describe('Delete Unit', () => {
    it('Success delete unit', async () => {
        //Get Token, Id
        const token = await getToken()
        const unit_Id = await unitId()
        //Response List         
        const response = await delUnitList(unit_Id, token)
        //Assert
        expect((await response).status).to.equal(200);
    })
})
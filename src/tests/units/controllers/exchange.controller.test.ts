import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../../../app' 
import { request } from 'chai';

import { exchangeInsertedMock, exchangeMock, listOfExchangesOnDatabaseMock } from '../../mocks/exchanges.mock';
import Exchange from '../../../database/models/Exchange';

const { expect } = chai;

chai.use(chaiHttp)


describe('Exchange Controller' , () => {
  beforeEach(() => {
    sinon.stub(Exchange, 'create').resolves(exchangeInsertedMock as Exchange)
    sinon.stub(Exchange, 'findAll').resolves(listOfExchangesOnDatabaseMock as unknown as Exchange[])
  })

  afterEach(() => {
    sinon.restore()
  })
  
  describe('Creating an exchange', () => {
    it('Succesfully created exchange', async () => {
        const response = await request(app).post('/exchange').send(exchangeMock)
        expect(response.status).to.be.equal(201)
    });
  });

  describe('Listing all exchanges filtred by userId', () => {
    it('Succesfully found', async () => {
        const response = await request(app).get('/exchange').send({ userId: 1})

        expect(response.status).to.be.equal(200)
        expect(response.body).to.be.deep.equal(listOfExchangesOnDatabaseMock)
    });
  });
});
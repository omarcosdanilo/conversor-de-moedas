import * as sinon from 'sinon';
import * as chai from 'chai';

import ExchangeService from '../../../services/exchange.service'
import Exchange from '../../../database/models/Exchange';

import {
  exchangeInsertedMock,
  exchangeMock,
  listOfExchangesOnDatabaseMock
} from '../../mocks/exchanges.mock'

const { expect } = chai;

const exchangeService = new ExchangeService


describe('Testing the function formatDate', () => {
  it('Should return the date in format YYYY-MM-DD, HH:MM', async () => {
    const date = await exchangeService.formatDate(new Date('2022-11-08T16:25:56.000Z'))

    expect(date).to.be.equal('2022-10-8, 13:25')
  });
});

describe('Testing the function insertExchange', () => {
  it('Should return the inserted object', async () => {
    sinon.stub(Exchange, 'create').resolves(exchangeInsertedMock as Exchange)

    const dataValues = await exchangeService.insertExchange(exchangeMock)

    expect(dataValues).to.be.deep.equal(exchangeInsertedMock.dataValues)

    sinon.restore()
  });
});

describe('Testing the function exchange', () => {
  it('Should return the source value multiplied by the conversion rate', async () => {
    const { targetValue } = exchangeInsertedMock.dataValues

    const exchangeValue = await exchangeService.exchange(exchangeMock)

    expect(exchangeValue).to.be.equal(targetValue)
  });
});

describe('Testing the function getExchanges', () => {
  it('Show return an array of exchanges filtred by the userId', async () => {
    sinon.stub(Exchange, 'findAll').resolves(listOfExchangesOnDatabaseMock as unknown as Exchange[])

    const exchangesList = await exchangeService.getExchanges(1)

    exchangesList.forEach((exchange) => {
      expect(exchange.userId).to.be.equal(1)
    });

    expect(exchangesList).to.be.deep.equal(listOfExchangesOnDatabaseMock)

  });
});
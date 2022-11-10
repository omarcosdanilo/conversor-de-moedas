export const exchangeMock = {
  "userId": 1,
  "sourceCurrency": "BRL",
  "sourceValue": 10,
  "targetCurrency": "USD",
  "conversionRate": 0.194296,
}

export const exchangeInsertedMock = { 'dataValues': {
  "userId": 1,
  "sourceCurrency": "BRL",
  "sourceValue": 10,
  "targetCurrency": "USD",
  "conversionRate": 0.194296,
  "targetValue": 1.94296,
  "id": 6,
  "createdAt": "2022-10-8, 13:25"
}} 

export const listOfExchangesOnDatabaseMock = [
  {
    "id": 1,
    "userId": 1,
    "sourceCurrency": "USD",
    "sourceValue": "2.00",
    "targetCurrency": "EUR",
    "conversionRate": "0.997155",
    "createdAt": "2022-11-07T19:53:07.000Z",
    "updatedAt": "2022-11-07T19:53:07.000Z"
  },
  {
    "id": 3,
    "userId": 1,
    "sourceCurrency": "USD",
    "sourceValue": "2.00",
    "targetCurrency": "EUR",
    "conversionRate": "0.997175",
    "createdAt": "2022-11-07T20:21:18.000Z",
    "updatedAt": "2022-11-07T20:21:18.000Z"
  },
  {
    "id": 4,
    "userId": 1,
    "sourceCurrency": "USD",
    "sourceValue": "2.00",
    "targetCurrency": "GBP",
    "conversionRate": "0.867145",
    "createdAt": "2022-11-07T20:22:16.000Z",
    "updatedAt": "2022-11-07T20:22:16.000Z"
  },
  {
    "id": 5,
    "userId": 1,
    "sourceCurrency": "USD",
    "sourceValue": "5.00",
    "targetCurrency": "EUR",
    "conversionRate": "0.997850",
    "createdAt": "2022-11-07T21:50:08.000Z",
    "updatedAt": "2022-11-07T21:50:08.000Z"
  },
  {
    "id": 6,
    "userId": 1,
    "sourceCurrency": "BRL",
    "sourceValue": "10.00",
    "targetCurrency": "USD",
    "conversionRate": "0.194296",
    "createdAt": "2022-11-08T16:25:56.000Z",
    "updatedAt": "2022-11-08T16:25:56.000Z"
  }
]
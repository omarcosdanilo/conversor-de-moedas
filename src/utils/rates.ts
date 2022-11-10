import fetch, { RequestInit } from 'node-fetch'

let myHeaders;

if (process.env.API_KEY) {
   myHeaders = {"apikey": process.env.API_KEY};
}

var requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const getRates = (baseCurrency: string, targetCurrency: string) => {
  const BASE_URL = `
  https://api.apilayer.com/exchangerates_data/latest?symbols=${targetCurrency}&base=${baseCurrency}
  `

  return fetch(BASE_URL, requestOptions)
  .then((res) => res.json())
  .catch((err) => err)
}

export default getRates
import Exchange from "../database/models/Exchange";
import { IExchange } from "../interfaces/exchange.interface";

class ExchangeService {

  async formatDate(date: Date): Promise<string> {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth()
    const day = newDate.getUTCDate()
    const hour = newDate.getHours()
    const minutes = newDate.getMinutes()

    const formatedDate = `${year}-${month}-${day}, ${hour}:${minutes}`

    return formatedDate
  }

  async insertExchange(payload: IExchange): Promise<Exchange> {
    const { userId, conversionRate, sourceCurrency, sourceValue, targetCurrency} = payload;

    const { dataValues } = await Exchange.create({
      userId, sourceCurrency, sourceValue, targetCurrency, conversionRate
    })

    return dataValues
  }

  async exchange(payload: IExchange): Promise<number> {
    const { conversionRate, sourceValue } = payload;

    const exchangeValue = sourceValue * conversionRate;

    return exchangeValue
  }

  async getExchanges(userId: number): Promise<Exchange[]> {
    const exchanges = Exchange.findAll({ where: { userId }})

    return exchanges
  }
}

export default ExchangeService;
import { NextFunction, Request, Response } from "express";
import { IExchange } from "../interfaces/exchange.interface";
import ExchangeService from "../services/exchange.service";
import getRates from "../utils/rates";

const exchangeService = new ExchangeService()

class ExchangeController {
  async exchange(req: Request, res: Response, next: NextFunction) {
    try {
      const { sourceCurrency, targetCurrency, userId, sourceValue} = req.body

      const upperBaseCurrency = sourceCurrency.toUpperCase()
      const upperTargetCurrency = targetCurrency.toUpperCase()

      const { rates: conversionRate } = await getRates(upperBaseCurrency, upperTargetCurrency)
      
      const payload: IExchange = {
        userId,
        sourceCurrency: upperBaseCurrency,
        sourceValue,
        targetCurrency: upperTargetCurrency,
        conversionRate: conversionRate[upperTargetCurrency]
      }

      const insertedData = await exchangeService.insertExchange(payload)

      const exchangeValue = await exchangeService.exchange(payload)

      res.status(201).json( { 
        ...payload, 
        'targetValue': exchangeValue, 
        'transactionId': insertedData.id, 
        'createdAt': await exchangeService.formatDate(insertedData.createdAt)
      })

    } catch (error) {
      next(error)
    }
  }

  async getExchanges(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.body
  
      const exchanges = await exchangeService.getExchanges(Number(userId))
  
      res.json(exchanges)
      
    } catch (error) {
      next(error)
    }
  }
}

export default ExchangeController
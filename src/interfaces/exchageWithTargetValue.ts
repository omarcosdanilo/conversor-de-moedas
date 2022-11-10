import { IExchange } from "./exchange.interface";

export interface IExchangeWithTargetValue extends IExchange {
  targetValue: number
  transactionId: number
  createdAt: string
}
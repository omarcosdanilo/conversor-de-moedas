export interface IExchange {
  userId: number;
  sourceCurrency: string;
  sourceValue: number;
  targetCurrency: string;
  conversionRate: number
}
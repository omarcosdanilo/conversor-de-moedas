import { Router } from 'express'
import ExchangeController from '../controllers/exchange.controller';

const exchangeRoute = Router();

const exchangeController = new ExchangeController()

exchangeRoute.post('/', exchangeController.exchange)
exchangeRoute.get('/', exchangeController.getExchanges)

export default exchangeRoute;
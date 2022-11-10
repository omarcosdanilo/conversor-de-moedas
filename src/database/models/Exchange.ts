import { Model, INTEGER, STRING, DECIMAL, DATE } from 'sequelize'
import db from '.'

class Exchange extends Model {
  id!: number
  userId!: number
  sourceCurrency!: string
  sourceValue!: number
  targetCurrency!: string
  conversionRate!: number
  createdAt!: Date
}

Exchange.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: INTEGER,
    allowNull: false
  },
  sourceCurrency: {
    type: STRING,
    allowNull: false
  },
  sourceValue: {
    type: DECIMAL,
    allowNull: false,
  },
  targetCurrency: {
    type: STRING,
    allowNull: false
  },
  conversionRate: {
    type: DECIMAL,
    allowNull: false
  },
  createdAt: {
    type: DATE
  }
},
{
  sequelize: db,
  underscored: true,
  modelName: 'exchanges'
})


export default Exchange
import { Model, INTEGER, STRING } from 'sequelize'
import db from '.'
import Exchange from './Exchange';

class User extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;

}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'User',
  tableName: 'users'
})

User.hasMany(Exchange, { foreignKey: 'userId', as: 'user'})

export default User
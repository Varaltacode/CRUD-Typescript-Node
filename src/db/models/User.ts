import {db} from '../db'
import {DataTypes} from 'sequelize'

export const User = db.define('user', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,

  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  age:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
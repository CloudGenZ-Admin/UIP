const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CarePack = sequelize.define('CarePack', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.TEXT, allowNull: false },
  consent: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  tableName: 'care_packs',
  timestamps: true,
});

module.exports = CarePack;
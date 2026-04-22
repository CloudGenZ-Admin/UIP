const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Partnership = sequelize.define('Partnership', {
  orgName: { type: DataTypes.STRING, allowNull: false },
  contactName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  interests: { 
    type: DataTypes.JSON, 
    allowNull: true 
  },
  otherInterest: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: 'contactpartnerships',
  timestamps: true,
});

module.exports = Partnership;
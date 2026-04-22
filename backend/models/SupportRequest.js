const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SupportRequest = sequelize.define('SupportRequest', {
  fullName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  primaryNeed: { type: DataTypes.STRING, allowNull: false },
  urgency: { type: DataTypes.ENUM('low', 'normal', 'high'), defaultValue: 'normal' },
  situationDesc: { type: DataTypes.TEXT, allowNull: false }
},
   {
  tableName: 'support_request',
  timestamps: true, 
}

);

module.exports = SupportRequest;
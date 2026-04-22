const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Wellness = sequelize.define('Wellness', {
  name: { type: DataTypes.STRING, allowNull: false },
  pronouns: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  session_type: { type: DataTypes.STRING },
  date_range: { type: DataTypes.STRING },
  time_pref: { type: DataTypes.STRING },
  first_time: { type: DataTypes.STRING },
  challenges: { type: DataTypes.TEXT },
  goals: { type: DataTypes.TEXT },
  access_needs: { type: DataTypes.TEXT },
  emergency_name: { type: DataTypes.STRING },
  emergency_phone: { type: DataTypes.STRING },
  notes: { type: DataTypes.TEXT },
}, {
  tableName: 'wellness',
  timestamps: true,
});

module.exports = Wellness;
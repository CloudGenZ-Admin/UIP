const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cultural = sequelize.define('Cultural', {
  name: { type: DataTypes.STRING, allowNull: false },
  pronouns: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  interests: { type: DataTypes.TEXT }, // Stored as comma separated string
  age_group: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  background: { type: DataTypes.STRING },
  dietary: { type: DataTypes.TEXT },
  access_needs: { type: DataTypes.TEXT },
  emergency_name: { type: DataTypes.STRING },
  emergency_phone: { type: DataTypes.STRING },
  volunteering: { type: DataTypes.BOOLEAN, defaultValue: false },
  photo_consent: { type: DataTypes.STRING },
  comments: { type: DataTypes.TEXT },
}, {
  tableName: 'cultural',
  timestamps: true,
});

module.exports = Cultural;
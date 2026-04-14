const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const YouthProgram = sequelize.define('YouthProgram', {
  name: { type: DataTypes.STRING, allowNull: false },
  pronouns: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  age_group: { type: DataTypes.STRING },
  newcomer_status: { type: DataTypes.STRING },
  interests: { type: DataTypes.TEXT },
  access_needs: { type: DataTypes.TEXT },
  allergies: { type: DataTypes.TEXT },
  emergency_contact: { type: DataTypes.STRING },
  photo_consent: { type: DataTypes.STRING },
}, {
  tableName: 'youth_programs',
  timestamps: true,
});

module.exports = YouthProgram;
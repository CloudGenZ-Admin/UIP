const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Partnership = sequelize.define('Partnership', {
  fullName: { type: DataTypes.STRING, allowNull: false },
  organizationName: { type: DataTypes.STRING, allowNull: false },
  roleTitle: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  interests: { type: DataTypes.JSON }, // Array of selected partnership interests
  aboutOrg: { type: DataTypes.TEXT },
  collaborationIdeas: { type: DataTypes.TEXT },
  cityProvince: { type: DataTypes.STRING },
  agreedToContact: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'partnership',
  timestamps: true, // Automatically adds createdAt and updatedAt
});

module.exports = Partnership;
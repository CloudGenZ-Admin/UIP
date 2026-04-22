const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Volunteer = sequelize.define('Volunteer', {
  fullName: { type: DataTypes.STRING, allowNull: false },
  preferredName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  interests: { type: DataTypes.JSON }, 
  availability: { type: DataTypes.STRING },
  livedExperience: { type: DataTypes.JSON },
  experienceDesc: { type: DataTypes.TEXT },
  motivationDesc: { type: DataTypes.TEXT },
  agreedToContact: { type: DataTypes.BOOLEAN, defaultValue: false }
}
  , {
  tableName: 'volunteer',
  timestamps: true, 
}
);

module.exports = Volunteer;
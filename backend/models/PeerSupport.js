const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PeerSupport = sequelize.define('PeerSupport', {
  name: { type: DataTypes.STRING, allowNull: false },
  pronouns: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  registering_for: { type: DataTypes.STRING },
  attended_before: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  access_needs: { type: DataTypes.TEXT },
  allergies: { type: DataTypes.TEXT },
  identity: { type: DataTypes.STRING },
  age_group: { type: DataTypes.STRING },
  goals: { type: DataTypes.TEXT },
  photo_consent: { type: DataTypes.STRING },
}, {
  tableName: 'peer_support',
  timestamps: true,
});

module.exports = PeerSupport;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  // Replaced day/month with a proper Date field
  date: { 
    type: DataTypes.DATEONLY, // Stores 'YYYY-MM-DD'
    allowNull: false
  }, 
  title: { type: DataTypes.STRING, allowNull: false }, 
  desc: { type: DataTypes.TEXT, allowNull: false },
  loc: { type: DataTypes.STRING, allowNull: false }, 
  // Stored as 'HH:mm' from the HTML5 time picker
  time: { type: DataTypes.STRING, allowNull: false },
  featured: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'events',
  timestamps: true,
});

module.exports = Event;
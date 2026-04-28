const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const News = sequelize.define('News', {
  category: { type: DataTypes.STRING, allowNull: false }, 
  region: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false }, 
  desc: { type: DataTypes.TEXT, allowNull: false },
  source: { type: DataTypes.STRING, allowNull: false }, 
  date: { 
    type: DataTypes.DATEONLY, // Stores 'YYYY-MM-DD'
    allowNull: false
  }, 
  url: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'news',
  timestamps: true,
});

module.exports = News;
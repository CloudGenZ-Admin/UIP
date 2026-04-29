const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const News = sequelize.define('News', {
  category: { type: DataTypes.STRING, allowNull: false }, 
  country: { type: DataTypes.STRING, allowNull: false }, // Changed from region to country
  title: { type: DataTypes.STRING, allowNull: false }, 
  desc: { type: DataTypes.TEXT, allowNull: false },
  source: { type: DataTypes.STRING, allowNull: false }, 
  date: { 
    type: DataTypes.DATEONLY,
    allowNull: false
  }, 
  url: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'news',
  timestamps: true,
});

module.exports = News;
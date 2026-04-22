const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Story = sequelize.define('Story', {
  name: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: true },
  story_text: { type: DataTypes.TEXT, allowNull: false },
  consent_pub: { type: DataTypes.BOOLEAN, defaultValue: false },
  consent_edit: { type: DataTypes.BOOLEAN, defaultValue: false },
  isPublished: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  tableName: 'stories',
  timestamps: true, // Automatically adds createdAt and updatedAt
});

module.exports = Story;
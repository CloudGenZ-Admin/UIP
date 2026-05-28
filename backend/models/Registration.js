const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Event = require('./Event');

const Registration = sequelize.define('Registration', {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: true }, // --- NEW: Phone field (Optional)
  guestStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Attending Alone'
  },
  // Foreign Key
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Event,
      key: 'id'
    }
  }
}, {
  tableName: 'registrations',
  timestamps: true,
});

// Associations
Event.hasMany(Registration, { foreignKey: 'eventId', onDelete: 'CASCADE' });
Registration.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = Registration;
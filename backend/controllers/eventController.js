const Event = require('../models/Event');
const Registration = require('../models/Registration');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ 
      order: [['date', 'ASC'], ['time', 'ASC']] 
    });
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};


exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: 'Failed to create event' });
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    await event.destroy();
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
};
exports.registerForEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, guestStatus } = req.body;
    
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    const newRegistration = await Registration.create({
      eventId: id,
      firstName,
      lastName,
      email,
      phone,
      guestStatus: guestStatus || 'Attending Alone'
    });

    res.status(201).json({ message: 'Registered successfully', data: newRegistration });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.getEventRegistrations = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registration.findAll({
      where: { eventId: id },
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
}; 

exports.deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    await registration.destroy();
    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (error) {
    console.error("Error deleting registration:", error);
    res.status(500).json({ error: 'Failed to delete registration' });
  }
};

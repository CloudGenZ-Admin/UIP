const Event = require('../models/Event');


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
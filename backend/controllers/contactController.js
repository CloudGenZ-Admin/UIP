const Contact = require('../models/Contact');

exports.create = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, id: contact.id });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.getAll = async (req, res) => {
  try {
    const contactsList = await Contact.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(contactsList);
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.delete = async (req, res) => {
  try {
    await Contact.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};
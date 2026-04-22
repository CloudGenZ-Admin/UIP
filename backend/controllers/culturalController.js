const Cultural = require('../models/Cultural');

exports.create = async (req, res) => {
  try {
    const cultural = await Cultural.create(req.body);
    res.status(201).json({ success: true, id: cultural.id });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.getAll = async (req, res) => {
  try {
    const culturalEvents = await Cultural.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(culturalEvents);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.delete = async (req, res) => {
  try {
    await Cultural.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
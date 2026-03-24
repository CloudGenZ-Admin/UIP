const Wellness = require('../models/Wellness');

exports.create = async (req, res) => {
  try {
    const wellness = await Wellness.create(req.body);
    res.status(201).json({ success: true, id: wellness.id });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.getAll = async (req, res) => {
  try {
    const wellnessList = await Wellness.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(wellnessList);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.delete = async (req, res) => {
  try {
    await Wellness.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
const YouthProgram = require('../models/YouthProgram');

exports.create = async (req, res) => {
  try {
    const youth = await YouthProgram.create(req.body);
    res.status(201).json({ success: true, id: youth.id });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.getAll = async (req, res) => {
  try {
    const youths = await YouthProgram.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(youths);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.delete = async (req, res) => {
  try {
    await YouthProgram.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
const CarePack = require('../models/CarePack');

exports.create = async (req, res) => {
  try {
    const carePack = await CarePack.create(req.body);
    res.status(201).json({ success: true, id: carePack.id });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.getAll = async (req, res) => {
  try {
    const carePacks = await CarePack.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(carePacks);
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.delete = async (req, res) => {
  try {
    await CarePack.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};
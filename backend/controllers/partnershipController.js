const Partnership = require('../models/Partnership');

exports.create = async (req, res) => {
  try {
    const partnership = await Partnership.create(req.body);
    res.status(201).json({ success: true, data: partnership });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 5; 
    const offset = (page - 1) * limit;

    const { count, rows } = await Partnership.findAndCountAll({
      order: [['createdAt', 'DESC']],
      limit: limit,
      offset: offset
    });

    res.status(200).json({
      data: rows,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItems: count
    });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};

exports.delete = async (req, res) => {
  try {
    await Partnership.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};
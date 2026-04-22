const Partnership = require('../models/contactPartnership');

exports.create = async (req, res) => {
  try {
    const partnership = await Partnership.create(req.body);
    console.log(partnership);
    res.status(201).json({ success: true, id: partnership.id, data: partnership });
  } catch (error) { 
    console.error("Error creating partnership:", error);
    res.status(500).json({ error: error.message }); 
  }
};

exports.getAll = async (req, res) => {
  try {
    // Added pagination to match your apiService: getPartnerships(page = 1)
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // Number of items per page
    const offset = (page - 1) * limit;

    const { count, rows } = await Partnership.findAndCountAll({ 
      order: [['createdAt', 'DESC']],
      limit: limit,
      offset: offset
    });

    res.status(200).json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows
    });
  } catch (error) { 
    console.error("Error fetching partnerships:", error);
    res.status(500).json({ error: error.message }); 
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedId = await Partnership.destroy({ where: { id: req.params.id } });
    if (!deletedId) {
      return res.status(404).json({ success: false, message: 'Partnership not found' });
    }
    res.status(200).json({ success: true, message: 'Partnership deleted successfully' });
  } catch (error) { 
    console.error("Error deleting partnership:", error);
    res.status(500).json({ error: error.message }); 
  }
};
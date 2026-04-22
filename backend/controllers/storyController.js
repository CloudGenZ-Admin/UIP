const Story = require('../models/Story');

exports.create = async (req, res) => {
  try {
   
    const storyData = { ...req.body, isPublished: false }; 
    const story = await Story.create(storyData);
    res.status(201).json({ success: true, id: story.id });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 4;
    const offset = (page - 1) * limit;

    
    const whereClause = {};
    if (req.query.isPublished === 'true') {
      whereClause.isPublished = true;
    }

    const { count, rows } = await Story.findAndCountAll({
      where: whereClause, // Apply filter here
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
    await Story.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.update = async (req, res) => {
  try {
    await Story.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { 
    res.status(500).json({ error: error.message }); 
  }
};
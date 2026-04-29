const News = require('../models/News');

exports.getNews = async (req, res) => {
  try {
    const news = await News.findAll({ 
      order: [['date', 'DESC']] 
    });
    res.status(200).json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

exports.createNews = async (req, res) => {
  try {
    const newNews = await News.create(req.body);
    res.status(201).json(newNews);
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(500).json({ error: 'Failed to create news' });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const newsItem = await News.findByPk(id);

    if (!newsItem) {
      return res.status(404).json({ error: 'News not found' });
    }

    await newsItem.destroy();
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ error: 'Failed to delete news' });
  }
};
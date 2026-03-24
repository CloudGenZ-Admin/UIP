const PeerSupport = require('../models/PeerSupport');

exports.create = async (req, res) => {
  try {
    const peer = await PeerSupport.create(req.body);
    res.status(201).json({ success: true, id: peer.id });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.getAll = async (req, res) => {
  try {
    const peers = await PeerSupport.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(peers);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.delete = async (req, res) => {
  try {
    await PeerSupport.destroy({ where: { id: req.params.id } });
    res.status(200).json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};
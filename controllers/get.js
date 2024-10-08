const database = require('../database/database'); 

exports.get = async (req, res) => {

  try {
    const result = await database.query(
      'SELECT * FROM board',
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

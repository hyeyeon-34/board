const database = require('../database/database'); 

exports.post = async (req, res) => {
    const { title, name, text } = req.body; 
  try {
    await database.query(
      'INSERT INTO board (title, name, text) VALUES ( $1, $2, $3)',
      [title, name, text]
    );
    return res.status(201).json({ message: 'Content Created Successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

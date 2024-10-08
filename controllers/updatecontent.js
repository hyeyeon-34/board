const database = require('../database/database');

exports.updateContent = async (req, res) => {
    const { title, name, text } = req.body;
    const { titleid } = req.params
    try {
      const result = await database.query(
        'UPDATE board SET title = $1, name = $2, text = $3 Where title = $4' ,
        [title, name, text, titleid], 
      );
      return res.status(200).json({ message: 'Content Updated Successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Update Completed Fail' + error });
    }
  };
  
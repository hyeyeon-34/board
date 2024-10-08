const database = require('../database/database'); 

exports.deletecontent = async (req, res) => {

    try {
      const title = req.params.title;
      const result = await database.query(
        'DELETE FROM board WHERE title = $1', [title],
      );
      return res.status(200).json({ message: 'Content Deleted Successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

//   const result = await database.query('DELETE FROM task WHERE _id = $1', [
  
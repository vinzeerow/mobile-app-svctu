const pool = require('./connectMySQL');

module.exports = {
    async getAllEvent() {
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query("Select * from sukien");
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
    async getEventById(id) {
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.query("Select * from sukien where maso=?",[id]);
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  };
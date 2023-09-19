const pool = require('./connectMySQL');

module.exports = {
    async getIdPosition() {
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query("Select masovitri from caudo");
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  };
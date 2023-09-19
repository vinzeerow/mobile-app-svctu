const pool = require('./connectMySQL');

module.exports = {
    async getIdStudent(mssv) {
      const connection = await pool.getConnection();
      try {
        const rows = await connection.query("select ll_maso from sinhvien where mssv=?", [mssv]);
        return rows[0];
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  };
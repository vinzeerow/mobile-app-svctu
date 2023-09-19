const pool = require('./connectMySQL');

module.exports = {
    async getArchivementById(id) {
      console.log("MODEL");
      console.log(id);
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.query("Select * from khenthuong where hv_maso=?",[id]);
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
}
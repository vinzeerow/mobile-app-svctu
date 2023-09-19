const pool = require('./connectMySQL');

module.exports = {
    async getIdChihoi(chiHoi,lienChiHoi) {
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.query("select ch.maso from chihoi as ch join lienchihoi as lch where ch.tenchihoi=? and lch.tenlienchihoi=?", [chiHoi,lienChiHoi]);
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  };
const pool = require('./connectMySQL');

module.exports = {
    async getAccounts() {
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query("Select * from taikhoan");
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  
    // async getUserById(userId) {
    //   const connection = await pool.getConnection();
    //   try {
    //     const [rows, fields] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    //     return rows[0];
    //   } catch (err) {
    //     throw err;
    //   } finally {
    //     connection.release();
    //   }
    // },
  
    async insertAccount(req) {
      const connection = await pool.getConnection();
      try {
        const [result] = await connection.query("Insert into taikhoan(tendangnhap,matkhau,ltk_maloai) values(?,?,?)",
        [req.codeStudent, req.password, 1 ]);
        return result;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  
    // async updateUser(userId, user) {
    //   const connection = await pool.getConnection();
    //   try {
    //     const [result] = await connection.query('UPDATE users SET ? WHERE id = ?', [user, userId]);
    //     return result.affectedRows > 0;
    //   } catch (err) {
    //     throw err;
    //   } finally {
    //     connection.release();
    //   }
    // },
  
    // async deleteUser(userId) {
    //   const connection = await pool.getConnection();
    //   try {
    //     const [result] = await connection.query('DELETE FROM users WHERE id = ?', [userId]);
    //     return result.affectedRows > 0;
    //   } catch (err) {
    //     throw err;
    //   } finally {
    //     connection.release();
    //   }
    // }
  };
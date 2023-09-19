const pool = require('./connectMySQL');

module.exports = {
    async getProfile() {
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query("Select * from lylich");
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  
    async getProfileById(id) {
      console.log(id);
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query(`select ll_maso,mssv,hoten,gioitinh,tongiao,ngaysinh,quequan,diachi,sdt,nganh,khoa,lop,tenchihoi 
        from lylich as ll join hoivien as hv on hv.ll_maso=ll.maso 
        join chihoi as ch on hv.ch_maso=ch.maso
        where ll.maso=?`, [id]);
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  
    async insertProfile(req) {
      const connection = await pool.getConnection();
      try {
        const [result] = await connection.query("Insert into lylich(hoten,gioitinh,tongiao,ngaysinh,quequan,diachi,sdt) values(?,?,?,?,?,?,?)",
                [req.name, req.gender, req.religion, req.dateOfBirth, req.hometown, req.address, req.phone]);
        return result.insertId;
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
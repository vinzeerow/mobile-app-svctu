const pool = require('./connectMySQL');

module.exports = {
    async getAllGroup() {
      const connection = await pool.getConnection();
      try {
        const [rows, fields] = await connection.query("Select * from nhom");
        return rows;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    },
  
    // async getProfileById(id) {
    //   console.log(id);
    //   const connection = await pool.getConnection();
    //   try {
    //     const [rows, fields] = await connection.query("select * from lylich where maso=?", [id]);
    //     return rows;
    //   } catch (err) {
    //     throw err;
    //   } finally {
    //     connection.release();
    //   }
    // },
  
    async createGroup(group) {
      
      const connection = await pool.getConnection();
      try {
        // const [result] = await connection.query('INSERT INTO nhom SET ?', [group]);
        console.log(group);
        // console.log(group.name);
        const [result] = await connection.query('INSERT INTO nhom(tennhom,soluong,trangthai) values(?,?,?)', [group.name, group.nextMemberId,group.status]);
        const result1=[];
        // console.log(result.insertId);
        group.members.map(async (member) => {
          result1.push(await connection.query('INSERT INTO thanhvien(mssv,n_maso) values(?,?)', [member.name, result.insertId ]));
        })
        
        return result1;

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
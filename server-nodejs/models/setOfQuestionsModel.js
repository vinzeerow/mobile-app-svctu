const pool = require('./connectMySQL');

module.exports = {
  async getAllSetOfQuestions() {
    const connection = await pool.getConnection();
    try {
      const [rows, fields] = await connection.query("Select * from bode");
      return rows;
    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  },

  async createSetOfQuestions(setOfQuestions) {

    const connection = await pool.getConnection();
    try {


      // console.log([setOfQuestions[1].length, setOfQuestions[0].id]);
      // console.log(setOfQuestions[1]);
      const [result] = await connection.query('INSERT INTO bode(soluong,n_maso) values(?,?)', [setOfQuestions[1].length, setOfQuestions[0].id]);
      const result2=[];
      setOfQuestions[1].map(async (item) => {
        // const [result1] = await connection.query('INSERT INTO vitri() values(?,?)', []);
        result2.push(await connection.query('INSERT INTO caudo(cauhoi,dapan,masovitri,tenvitri,bd_maso) values(?,?,?,?,?)', [item.question, item.answer,item.idAddress, item.address,result.insertId]));
        // console.log([item.idAddress, item.address]);
        // console.log([item.question, item.address]);

      })
      const [result3] = await connection.query('UPDATE nhom SET trangthai = "Đã có đề" WHERE maso=?', [setOfQuestions[0].id]);


      // const result1=[];
      // // console.log(result.insertId);
      // group.members.map(async (member) => {
      //   result1.push(await connection.query('INSERT INTO thanhvien(mssv,n_maso) values(?,?)', [member.name, result.insertId ]));
      // })

      return result3;

    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  },
};
const pool = require('./connectMySQL');

module.exports = {
    async getIdProfile(mssv) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query("select ll_maso from hoivien where mssv=?", [mssv]);
            return rows[0];
        } catch (err) {
            throw err;
        } finally {
            connection.release();
        }
    },
    async getMemberByUnit(mssv) {
        const connection = await pool.getConnection();
        try {


            const [ch_maso] = await connection.query("select ch_maso from canbohoi as cbh join chucvu as cv on cbh.cv_maso=cv.maso where tk_tendangnhap=?", [mssv]);
            const [rows] = await connection.query(`
            select distinct mssv,hoten,nganh,khoa
            from hoivien as hv 
            join lylich as ll on hv.ll_maso=ll.maso 
            join chihoi as ch on hv.ch_maso=ch.maso
            join lienchihoi as lch on lch.maso=ch.lch_maso
            where ch_maso=?
            `, [ch_maso[0]]);

            return rows;
        } catch (err) {
            throw err;
        } finally {
            connection.release();
        }
    },
    async getMemberById(mssv) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query("select * from hoivien where mssv=?", [mssv]);
            return rows[0];
        } catch (err) {
            throw err;
        } finally {
            connection.release();
        }
    },
    async insertMember(req, ch_maso, ll_maso) {
        console.log(req);
        const connection = await pool.getConnection();
        try {
            const rows = await connection.query("Insert into hoivien(mssv,nganh,khoa,lop,ch_maso,ll_maso,tk_tendangnhap) values(?,?,?,?,?,?,?)",
                [req.codeStudent, req.major, req.course, req.codeClass, ch_maso, ll_maso, req.codeStudent]);
            return rows;
        } catch (err) {
            throw err;
        } finally {
            connection.release();
        }
    },
};
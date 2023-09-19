const pool = require('./connectMySQL');
const axios = require('axios');
module.exports = {
    // async getAllIdRoom(req, res) {
    //   const connection = await pool.getConnection();
    //   try {
    //     const rows = await connection.query("select ll_maso from sinhvien where mssv=?", [mssv]);
    //     return rows[0];
    //   } catch (err) {
    //     throw err;
    //   } finally {
    //     connection.release();
    //   }
    // },
    async getRoomsCTU(req, res) {

        try {
            axios.get('https://geoserver.ctu.edu.vn/geoserver/ctu/wfs', {
                params: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'ctu:room_by_floor',
                    outputFormat: 'application/json'
                }
            })
                .then((coordinate) => {
                    res.json(coordinate.data);
                });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Error getting coordinates');
        }
    }
}

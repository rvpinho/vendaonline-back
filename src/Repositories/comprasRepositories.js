
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(compra) {
    try {
        const pool = await connectToDB();
        const originalDate = new Date(compra.date);
        const formattedDate = originalDate.toISOString().slice(0, 19).replace('T', ' ');

        const result = await pool.request().query(`INSERT INTO Compras (usuario_id, endereco_id, data) VALUES (${compra.usuario_id}, ${compra.endereco_id}, '${formattedDate}')`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Compras WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(compra) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Compras SET usuario_id = ${compra.usuario_id}, endereco_id = ${compra.endereco_id}, data = ${compra.date} WHERE id = ${compra.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Compras WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Compras");
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }

}

module.exports = {
    insert,
    remove,
    update,
    getById,
    getAll
}


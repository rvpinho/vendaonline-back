
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(compra) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO Cidades (nome, estado_id) VALUES ('${compra.nome}', ${compra.estado_id})`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Cidades WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(compra) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Cidades SET nome = ${compra.nome}, estado_id = ${compra.estado_id} WHERE id = ${compra.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Cidades WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Cidades");
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


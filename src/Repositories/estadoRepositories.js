
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(estado) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO Estados (nome, sigla) VALUES ('${estado.nome}', '${estado.sigla}')`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Estados WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(estado) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Estados SET nome = ${estado.nome}, sigla = ${estado.sigla} WHERE id = ${estado.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Estados WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Estados");
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


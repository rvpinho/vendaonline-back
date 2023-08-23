
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(endereco) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO Enderecos (rua, numero, bairro, cidade_id, usuario_id, telefone) VALUES ('${endereco.rua}', ${endereco.numero}, '${endereco.bairro}', ${endereco.cidadeId}, ${endereco.usuario_id}, '${endereco.telefone}')`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Enderecos WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(endereco) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Enderecos SET rua = '${endereco.rua}', numero = '${endereco.numero}', bairro = '${endereco.bairro}', cidade_id = '${endereco.cidadeId}', usuario_id = '${endereco.usuario_id}', telefone = '${endereco.telefone}' WHERE id = ${endereco.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Enderecos WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Enderecos");
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



const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(user) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO Usuarios (nome, email, senha) VALUES ('${user.nome}', '${user.email}', '${user.senha}')`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Usuarios WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(user) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Usuarios SET nome = ${user.nome}, email = ${user.email}, senha = ${user.senha} WHERE id = ${user.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Usuarios WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Usuarios");
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


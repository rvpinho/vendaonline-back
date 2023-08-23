
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(produto) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO Produtos (descricao, valor_unitario) VALUES ('${produto.descricao}', '${produto.valor_unitario}')`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM Produtos WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(produto) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE Produtos SET  descricao = '${produto.descricao}', valor_unitario = '${produto.valor_unitario}' WHERE id = ${produto.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Produtos WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM Produtos");
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
const { connectToDB, executeQuery } = require("../Core/ConnectionDB/ConnectionDB");

async function insert(compraProduto) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`INSERT INTO ComprasProdutos (idCompra, idProduto) VALUES (${compraProduto.idCompra}, ${compraProduto.idProduto})`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function remove(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("DELETE FROM ComprasProdutos WHERE id = " + id);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function update(compraProduto) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query(`UPDATE ComprasProdutos SET idCompra = ${compraProduto.idCompra}, idProduto = ${compraProduto.idProduto} WHERE id = ${compraProduto.id}`);
        return result.recordset;
      } 
    catch (error) {
        throw error;
      }
}

async function getById(id) {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM ComprasProdutos WHERE id = " + id);
        return result.recordset[0];
      } 
    catch (error) {
        throw error;
      }
}

async function getAll() {
    try {
        const pool = await connectToDB();
        const result = await pool.request().query("SELECT * FROM ComprasProdutos");
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


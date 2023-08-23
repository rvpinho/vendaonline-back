const { insert, remove, update, getById, getAll } = require("../Repositories/comprasRepositories");
const { insertCompraProduto } = require("../Service/comprasProdutoService");

async function insertCompras(compra) {
    return await insert(compra);
}

async function removeCompras(id) {
    return await remove(id);
}

async function updateCompras(compra) {
    return await update(compra);
}

async function getByIdCompras(id) {
    return await getById(id);
}

async function getAllCompras() {
    return await getAll();
}

module.exports = {
    insertCompras,
    removeCompras,
    updateCompras,
    getByIdCompras,
    getAllCompras
}


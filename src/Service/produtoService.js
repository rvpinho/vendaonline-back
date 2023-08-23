const { insert, remove, update, getById, getAll } = require("../Repositories/produtosRepositories");

async function insertProduto(produto) {
    return await insert(produto);
}

async function removeProduto(id) {
    return await remove(id);
}

async function updateProduto(produto) {
    return await update(produto);
}

async function getByIdProduto(id) {
    return await getById(id);
}

async function getAllProdutos() {
    return await getAll();
}

module.exports = {
    insertProduto,
    removeProduto,
    updateProduto,
    getByIdProduto,
    getAllProdutos
}


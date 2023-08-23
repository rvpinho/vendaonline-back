const { insert, remove, update, getById, getAll } = require("../Repositories/comprasProdutosRepositories");

async function insertCompraProduto(compraProduto) {
    return await insert(compraProduto);
}

async function removeCompraProduto(id) {
    return await remove(id);
}

async function updateCompraProduto(compraProduto) {
    return await update(compraProduto);
}

async function getByIdCompraProduto(id) {
    return await getById(id);
}

async function getAllCompraProduto() {
    return await getAll();
}

module.exports = {
    insertCompraProduto,
    removeCompraProduto,
    updateCompraProduto,
    getByIdCompraProduto,
    getAllCompraProduto
}


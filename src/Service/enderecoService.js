const { insert, remove, update, getById, getAll } = require("../Repositories/enderecoRepositories");

async function insertEndereco(endereco) {
    return await insert(endereco);
}

async function removeEndereco(id) {
    return await remove(id);
}

async function updateEndereco(endereco) {
    return await update(endereco);
}

async function getByIdEndereco(id) {    
    return await getById(id);
}

async function getAllEndereco() {
    return await getAll();
}

module.exports = {
    insertEndereco,
    removeEndereco,
    updateEndereco,
    getByIdEndereco,
    getAllEndereco
}


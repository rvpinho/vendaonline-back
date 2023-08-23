const { insert, remove, update, getById, getAll } = require("../Repositories/cidadeRepositories");

async function insertCidade(Cidades) {
    return await insert(Cidades);
}

async function removeCidade(id) {
    return await remove(id);
}

async function updateCidade(Cidades) {
    return await update(Cidades);
}

async function getByIdCidade(id) {
    return await getById(id);
}

async function getAllCidades() {
    return await getAll();
}

module.exports = {
    insertCidade,
    removeCidade,
    updateCidade,
    getByIdCidade,
    getAllCidades
}


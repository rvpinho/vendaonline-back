const { insert, remove, update, getById, getAll } = require("../Repositories/estadoRepositories");

async function insertEstado(estados) {
    return await insert(estados);
}

async function removeEstado(id) {
    return await remove(id);
}

async function updateEstado(estados) {
    return await update(estados);
}

async function getByIdEstado(id) {
    return await getById(id);
}

async function getAllEstados() {
    return await getAll();
}

module.exports = {
    insertEstado,
    removeEstado,
    updateEstado,
    getByIdEstado,
    getAllEstados
}


const { insert, remove, update, getById, getAll } = require("../Repositories/usersRepositories");

async function insertUser(user) {
    return await insert(user);
}

async function removeUser(id) {
    return await remove(id);
}

async function updateUser(user) {
    return await update(user);
}

async function getByIdUser(id) {
    return await getById(id);
}

async function getAllUsers() {
    return await getAll();
}

module.exports = {
    insertUser,
    removeUser,
    updateUser,
    getByIdUser,
    getAllUsers
}


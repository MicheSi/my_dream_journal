const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findByUser,
    add,
    update,
    remove
}

function find() {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description')
}

function findByUser(user_id) {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description')
        .where('d.user_id', user_id)
}
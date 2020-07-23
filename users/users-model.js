const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findUserDreams,
    update,
    remove
}

function find() {
    return db('users')
        .select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({id})
        .first();
}

function findUserDreams(user_id) {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description')
        .where('d.user_id', user_id);
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function update(id, changes) {
    return db('users')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del();
}
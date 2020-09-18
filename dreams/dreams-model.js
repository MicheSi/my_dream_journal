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
        .select('d.id', 'd.date', 'd.description', 'd.user_id', 'u.username')
}

function findByUser(user_id) {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description')
        .orderBy('d.date')
        .orderBy('d.id')
        .where('d.user_id', user_id)
}

function findById(id) {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description')
        .where('d.id', id)
        .first()
}

function add(dream) {
    return db('dreams')
        .insert(dream, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function update(changes, id) {
    return db('dreams')
        .where({id})
        .update(changes)
        .then(ids => {
            return findById(id)
        })
}

function remove(id) {
    return db('dreams')
        .where({id})
        .del();
}
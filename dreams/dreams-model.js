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

function findById(id) {
    return db('dreams as d')
        .join('users as u', 'u.id', 'd.user_id')
        .select('d.id', 'd.date', 'd.description', 'd.user_id')
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
        .update(changes);
}

function remove(id) {
    return db('dreams')
        .where({id})
        .del();
}
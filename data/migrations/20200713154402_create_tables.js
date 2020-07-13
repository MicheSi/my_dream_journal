
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 128)
            .index()
            .notNullable()
            .unique();
        tbl.string('password', 128).notNullable();
    })

    .createTable('dreams', tbl => {
        tbl.increments();

        tbl.date('date').notNullable();
        tbl.text('description').notNullable();
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('dreams')
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_dreams').insert([
        {user_id: 1, dream_id: 1},
        {user_id: 2, dream_id: 2},
        {user_id: 3, dream_id: 3}
      ]);
    });
};

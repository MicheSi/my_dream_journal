
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, username: 'User1', password: 'test1234'},
    {id: 2, username: 'TestUser', password: 'testing123'},
    {id: 3, username: 'MyUser', password: 'test000'}
  ]);
};

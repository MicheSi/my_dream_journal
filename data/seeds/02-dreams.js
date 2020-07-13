
exports.seed = function(knex) {
  return knex('dreams').insert([
    {id: 1, date: '2020-07-13', description: 'I had a dream about a dog.', user_id: 1},
    {id: 2, date: '2020-07-12', description: 'I dreamed I was being chased by aliens.', user_id: 2},
    {id: 3, date: '2020-07-11', description: 'Last night, I had a dream that I won the lottery', user_id: 3}
  ]);
};

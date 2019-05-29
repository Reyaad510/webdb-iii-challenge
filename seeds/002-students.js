
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Reyaad Student', cohort_id: '1'},
        {name: 'Aleem Student', cohort_id: '1'},
        {name: 'Adam Student', cohort_id: '1'}
      ]);
    });
};

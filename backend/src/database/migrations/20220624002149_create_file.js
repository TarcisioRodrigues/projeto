
exports.up = function(knex) {
  return knex.schema.createTable('File', function (table) {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable();
    table.string('path').notNullable();
  })
};



exports.down = function (knex) {
  return knex.schema.dropTable('File');
};

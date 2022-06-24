exports.up = function (knex) {
  return knex.schema.createTable('User', function (table) {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable();
    table.string('CNPJ').notNullable();
    table.string('empress').notNullable();
    table.string('contact').notNullable();
    table.string('segment').notNullable();
    table.string('email').notNullable();
    table.string('avatar')
    table.boolean('admin');
    table.string('password').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('User');
};

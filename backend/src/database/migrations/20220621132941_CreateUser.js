
exports.up = function(knex) {
    return knex.schema.createTable('User', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('CNPJ').notNullable();
        table.string('empress').notNullable();
        table.string('contact').notNullable();
        table.string('segment').notNullable();
        table.string('email').notNullable();
        table.boolean('admin');
        table.string('password').notNullable()
      })
    };


exports.down = function(knex) {
    return knex.schema.dropTable('User');
};

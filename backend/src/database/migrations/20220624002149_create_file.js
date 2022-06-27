
exports.up = function(knex) {
  return knex.schema.createTable('File', function (table) {
    table.string('name').notNullable();
    table.string('path').notNullable();
    
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());

    table.increments('avatar_id').notNullable();
    table.foreign('avatar_id').references('id').inTable('User').onUpdate('CASCADE').onDelete('CASCADE');
  }
  )
};



exports.down = function (knex) {
  return knex.schema.dropTable('File');
};

module.exports = {
   development: {
     client: 'sqlite3',
     connection: {
       filename: './src/database/db.sqlite',
     },
     migrations: {
       directory: './src/database/migrations',
     },
     useNullAsDefault: true,
   },
//   development: {
//   client: 'mysql',
//   connection: {
//     user:'root',
//     password:'',
//   database:'api'
// },
//   migrations: {
//        directory: './src/database/migrations',
//      },
//       useNullAsDefault: true,
    
// },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

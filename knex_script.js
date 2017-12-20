
const pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});
const settings = require('./settings');
const client = require('./client.js');
const userInput = process.argv[2];
const resultPrinter = (result) => {console.log(result);}
var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.select('*')
    .from('famous_people')
    .where({ last_name: userInput})
    .asCallback(function(err, rows) {
    resultPrinter(rows);
    knex.destroy();
    })

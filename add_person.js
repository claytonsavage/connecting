const settings = require('./settings');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});
//birthdate must be in format 1809-02-12
const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = process.argv[4];
knex.insert({first_name: firstName,
              last_name: lastName,
              birthdate: birthDate})
    .into('famous_people')
    .asCallback(function(err, result) { knex.destroy(); });
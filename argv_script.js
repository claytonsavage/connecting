const pg = require("pg");
const settings = require('./settings');

const client = new pg.Client({
  user      : settings.user,
  password  : settings.password,
  database  : settings.database,
  host      : settings.hostname,
  port      : settings.port,
  ssl       : settings.ssl
})

const userInput = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE last_name = $1",[userInput],(err, result) => {
    if (err) {
      return console.error("Error running query", err);
    }
    console.log(result.rows);
    client.end();
  });
});
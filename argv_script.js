const pg = require("pg");
const settings = require('./settings');
const client = require('./client.js');
const userInput = process.argv[2];
const resultPrinter = (result) => {console.log(result.rows);}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  clientQuery
});

let clientQuery = client.query("SELECT * FROM famous_people WHERE last_name = $1",[userInput],(err, result) => {
    if (err) {
      return console.error("Error running query", err);
    }
    resultPrinter(result);
    client.end();
  });
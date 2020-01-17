
// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "j1jsufsxfh19t7bn",
  password: "zvs1cd25z1u4pur3",
  database: "nl65nhr2ht6004bf"
  });

};






// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Qwert411!",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "123",
database: "nodejs_api"
});
con.connect(function (err){
if(err) throw err;
});
module.exports = con;
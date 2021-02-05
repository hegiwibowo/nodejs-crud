var mysql = require('mysql');
var con = mysql.createConnection({
host: "database-nodejs-project.cutcqrbubjpf.ap-southeast-2.rds.amazonaws.com",
user: "root",
password: "123qweasd",
database: "nodejs_api"
});
con.connect(function (err){
if(err) throw err;
});
module.exports = con;

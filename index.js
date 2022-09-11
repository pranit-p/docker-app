var http = require("http");
//create a server object:
const redis = require("redis");

let redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    port: 6379,
    host: "host.docker.internal",
  },
});

redisClient.connect().catch(console.error);

redisClient.set("framework", "ReactJS");

redisClient.get("framework", function (err, reply) {
  console.log(reply);
  http
    .createServer(function (req, res) {
      res.write(reply); //write a response to the client
      res.end(); //end the response
    })
    .listen(3000);
  console.log(); // ReactJS
});

// console.log(host.docker.internal);
console.log("host.docker.internal");

// var mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "host.docker.internal",
//   port: 3306,
//   database: "pranit",
//   user: "root",
//   password: "password",
// });

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

// connection.connect(function (err) {
//   if (err) {
//     console.log("error occurred while connecting");
//     console.log(err);
//   } else {
//     console.log("connection created with Mysql successfully");
//   }
// });

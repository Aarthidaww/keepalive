const http = require("http");
const constants = require("./constants");
const keepServerAlive = require("./keepServerAlive");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("A hack to keep free services alive deployed on onrender.\n");
});

const PORT = process.env.PORT || constants.PORT;

server.listen(PORT, () => {
  console.log("server listening");
  keepServerAlive.start();
});

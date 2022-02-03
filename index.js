const bodyParser = require("body-parser");
const express = require("express");

const path = require("path");
const server = express("server");

const loginRequestHandler = (req, res) => {
  // let body = "";
  // req.on("data", (chunk) => {
  //   body += chunk;
  // });
  // req.on(end, () => {
  //   console.log(body);
  // });

  console.log(req.body.email);
  console.log(req.body.password);
  res.send("Done");
};

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({ extended: false }));

server.post("/login", loginRequestHandler);

server.listen(1000, () => console.log("server is ready to accept request"));

const express = require("express");

const path = require("path");
const server = express("server");

const loginRequestHandler = (req, res) => {
  console.log(req);
  res.send("Done");
};

server.use(express.static(path.join(__dirname, "public")));

server.post("/login", loginRequestHandler);

server.listen(1000, () => console.log("server is ready to accept request"));

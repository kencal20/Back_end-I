const express = require("express");

const handleAllRequest = (requestObject, responseObject) => {
  const url = requestObject.url;

  responseObject.end();
};

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to Home page</h1>");
};


const server = express();

server.use("/", handleHomeRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

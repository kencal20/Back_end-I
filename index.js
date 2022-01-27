const express = require("express");


 

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to Home page</h1>");
};
const handleLoginRequest = (req, res) => {
  res.send("<h1>This is the login Page</h1>");
};

const server = express();
server.post("/login",handleLoginRequest)
server.use("/", handleHomeRequest);


server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

const express = require("express");

const handleAllRequest = (requestObject, responseObject) => {
  //<--RequestObject-->
  //   console.log("hi, just recieved a request");
  //   console.log(requestObject);

  //  <-- ResponseObject -->
  //   responseObject.write("<h1>this is your response</h1> \n");
  //   responseObject.write('second part of response')

  const url = requestObject.url;

  responseObject.end();
};

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
};
const handleLoginRequest = (req, res) => {
  res.send("<h1>Welcome to Login page</h1>");
};
const handleSigninRequest = (req, res) => {
  res.send("<h1>Welcome to Signin page</h1>");
};

const handleProfileRequest = (req, res) => {
  res.send("<h1>Welcome to Profile page</h1>");
};

const server = express();
server.use("/signin", handleSigninRequest);
server.use("/login", handleLoginRequest);
server.use("/profile", handleProfileRequest);
server.use("/", handleHomeRequest);
server.use(handleAllRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

const express = require("express");

const handleAllRequest = (requestObject, responseObject) => {
  const url = requestObject.url;

  responseObject.end();
};

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to Home page</h1>");
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

const handleSettingRequest = (req, res) => {
  res.send("<h1>Welcome to Settings page</h1>");
};

const handleContactRequest = (req, res) => {
  res.send("<h1>Welcome to Contacts page</h1>");
};

const server = express();
server.use("/contacts", handleContactRequest);
server.use("/settings", handleSettingRequest);
server.use("/signin", handleSigninRequest);
server.use("/login", handleLoginRequest);
server.use("/profile", handleProfileRequest);
server.use("/", handleHomeRequest);
server.use(handleAllRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

const express = require("express");

const handleLoginRequest = (req, res) => {
  res.send("<h1>This is the login Page</h1>");
};
const handleProfileRequest = (req, res) => {
  res.send("<h1>This is the  Profile Page with patch method</h1>");
};

const handleSigninRequest = (req, res) => {
  res.send("<h1>This is the Signin Page with Put method</h1>");
};
const handleUserRequest = (req, res) => {
  res.send("<h1>This is the User Page with method get</h1>");
};
const handleContactsRequest = (req, res) => {
  res.send("<h1>This is the contacts Page  with delete method</h1>");
};


//Middleware
const middlewarefunction = (req, res, next) => {
  console.log("This is the middleware");
  //make some checks
next()
};



//Routes
const server = express();
server.use(middlewarefunction);
server.post("/login", handleLoginRequest);
server.patch("/profile", handleProfileRequest);
server.put("/signin", handleSigninRequest);
server.get("/user", handleUserRequest);
server.delete("/contacts", handleContactsRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

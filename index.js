const express = require("express");
const path = require("path");
const server = express("server");
server.use(express.static(path.join(__dirname,"public")))
// const serveHomePage = (req,res) => {
//   //find the file
//   const homepagefilepath = path.join(__dirname, "public", "index.html");
//   //send file to client
//    res.sendFile(homepagefilepath);
// };
// //Router definition
// server.get("/", serveHomePage);

server.listen(1000, () => console.log("server is ready to accept request"));

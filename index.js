const http = require("http");

const handleAllRequest = (requestObject, responseObject) => {
  console.log("hi, just recieved a request");
    console.log(requestObject);

};
const server = http.createServer(handleAllRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

const http = require("http");

const handleAllRequest = (requestObject, responseObject) => {
  console.log("hi, just recieved a request");
  //   console.log(requestObject);
  responseObject.write("<h1>this is your response</h1> \n");
  responseObject.write('second part of response')
  responseObject.end();
};
const server = http.createServer(handleAllRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

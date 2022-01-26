const http = require("http");

const handleAllRequest = (requestObject, responseObject) => {
  //<--RequestObject-->
  //   console.log("hi, just recieved a request");
  //   console.log(requestObject);

  //  <-- ResponseObject -->
  //   responseObject.write("<h1>this is your response</h1> \n");
  //   responseObject.write('second part of response')

  const url = requestObject.url;
  if (url === "/") {
    responseObject.write("<h1>Welcome to home page</h1>");
  } else if (url === "/login") {
    responseObject.write("<h1>Welcome to Login page</h1>");
  } else if (url === "/signup") {
    responseObject.write("<h1>Welcome to Signup page</h1>");
  } else {
    responseObject.write("<h1>Page not found</h1>");
  }

  responseObject.end();
};
const server = http.createServer(handleAllRequest);

server.listen(1000, "localhost", () =>
  console.log("server is ready to accept request")
);

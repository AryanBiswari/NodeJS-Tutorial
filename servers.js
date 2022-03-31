const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hello Aryan</h1>");
    res.write("<button>submit</button>");
    res.end();
  })
  .listen(5000);

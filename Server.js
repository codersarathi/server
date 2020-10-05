const http = require('http');

const app = http.createServer((req,res) => {
  res.end("<p>Hello</p>");
});

app.listen(8080,() => {
  console.log("Server is started on 8080");
})
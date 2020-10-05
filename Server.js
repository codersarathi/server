const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.question("Enter you code: ",(ans) => {
  const app = http.createServer((req,res) => {
  res.end(ans);
});

app.listen(8080,() => {
  console.log("Server is started on 8080");
})
})



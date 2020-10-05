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
  console.log("Note: Open your chrome browser and type (localhost:8080). Follow the author for more Tools github: codersarathi");
  console.log("Press Ctrl + c for close server");
})
})



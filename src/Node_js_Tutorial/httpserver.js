const http = require("http");

const port = process.env.PORT || 3000;

const sever = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is nodejs tutorial</h1> <p>this is amazing work</p>");
});

sever.listen(port, () => {
  console.log(`Server is listing on port ${port}`);
});

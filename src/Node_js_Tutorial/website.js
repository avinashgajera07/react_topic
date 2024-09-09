const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const sever = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is nodejs tutorial</h1> <p>this is amazing work</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is about page</h1> <p>this is amazing work</p>");
  } else if (req.url == "/html") {
    res.statusCode = 200;
    // res.end("<h1>This is about page</h1> <p>this is amazing work</p>");
    const data = fs.readFileSync("example.html");
   res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>Page not found</h1> <p>Please change path</p>");
  }
});

sever.listen(port, () => {
  console.log(`Server is listing on port ${port}`);
});

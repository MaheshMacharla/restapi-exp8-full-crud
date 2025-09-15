const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <style>
          body {
            background-color: white; /* sets background to white */
            color: black;
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <h1>Hello REST API</h1>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

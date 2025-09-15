const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Serve HTML content

  if (req.method === 'GET' && req.url === '/api/get-data') {
    res.statusCode = 200;
    res.end(`
      <html>
        <head>
          <style>
            body {
              background-color: white; /* Set background to white */
              color: black;
              font-family: Arial, sans-serif;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <h1>GET request received successfully!</h1>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && req.url === '/api/post-data') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        res.statusCode = 201; // Created
        res.end(`
          <html>
            <head>
              <style>
                body {
                  background-color: white; /* Set background to white */
                  color: black;
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
              </style>
            </head>
            <body>
              <h1>POST request received successfully!</h1>
              <p>Received Data: ${JSON.stringify(data)}</p>
            </body>
          </html>
        `);
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.end(`
          <html>
            <head>
              <style>
                body {
                  background-color: white;
                  color: red;
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
              </style>
            </head>
            <body>
              <h1>Invalid JSON format</h1>
            </body>
          </html>
        `);
      }
    });
  } else {
    res.statusCode = 404; // Not Found
    res.end(`
      <html>
        <head>
          <style>
            body {
              background-color: white;
              color: gray;
              font-family: Arial, sans-serif;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <h1>Endpoint not found</h1>
        </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

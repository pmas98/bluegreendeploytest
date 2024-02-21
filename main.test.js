const http = require('http');
const assert = require('assert');

test('Server should respond with "Hello, World!"', (done) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  });

  server.listen(3000, () => {
    http.get('http://localhost:3000', (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        expect(data).toBe('Hello, World!\n');
        server.close();
        done(); 
      });
    });
  });
});
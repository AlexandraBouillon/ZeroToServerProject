const http = require('http');

http.createServer((req, res) => {
  if(req.url === '/OK'){
    console.log('Message received loud and clear.')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Status 200 OK</h1>')
    res.end();
   } else if(req.url === '/Bad-Request') {
    console.log('Bad Request');
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.write('<h1>400 Bad Request</h1>')
    res.end()
  } else if(req.url === '/Created') {
    if(req.method === 'POST'){
      console.log('Created');
      res.writeHead(201, {'Content-Type': 'text/html'});
      res.write('<h1>Status 201 Created</h1>')
      res.end()
    } else {
      res.writeHead(405, {'Content-Type': 'text/html'});
      res.write('<h1>Status 405 Method Allowed</h1>')
      res.end()
    }
  } else if(req.url === '/Forbidden') {
    console.log('Forbodden');
    res.writeHead(403, {'Content-Type': 'text/html'});
    res.write('<h1>Status 403 FORBODDEN</h1>')
    res.end()
  } else if(req.url === '/Found') {
    console.log('Found');
    res.writeHead(302, {'Content-Type': 'text/html'});
    res.write('<h1>Status 302 Found</h1>')
    res.end()
  } else if(req.url === '/Gateway-Timeout') {
    console.log('Gateway Timeout');
    res.writeHead(504, {'Content-Type': 'text/html'});
    res.write('<h1>Status 504 Gateway Timeout</h1>')
    res.end()
  } else if(req.url === '/Internal-Server-Error') {
    console.log('Internal Server Error');
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.write('<h1>Status 500 Internal Serval Error</h1>')
    res.end()
  } else if(req.url === '/Moved-Permanently') {
    console.log('Moved Permanently');
    res.writeHead(301, {'Content-Type': 'text/html'});
    res.write('<h1>Status 301 Moved Permanently</h1>')
    res.end()
  } else if(req.url === '/Unauthorized') {
    console.log('You cant come in here.');
    res.writeHead(401, {'Content-Type': 'text/html'});
    res.write('<h1>Status 200 OK</h1>')
    res.end()
  } else if(req.url === '/Bonus/Redirect') {
    console.log('Bad Request');
    res.writeHead(302, {'Location': 'http://localhost:3000/Forbidden'});
    res.end()
  } else if(req.url === '/Bonus Webpage') {
   res.writeHead(200, {'Content-Type':'text/html'})
      res.write('<html>')
      res.write('<body>')
      res.write('<h1>Hello, World!</h1>>')
      res.write('</body>')
      res.write('</html>')
  } else if(req.url === '/Bonus Created') {
    if (req.method == 'POST') {
      res.writeHead(201, {'Content-Type':'text/html'})
    } else {
      console.log('Request not found');
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<h1>Status 404 Request Not Found</h1>');
      res.end();
    }
  }
}).listen(3000, () => {
  console.log('Server 3000, is listening.');
})

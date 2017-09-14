
//////////////////// IMPORTS ///////////////////////

const http = require('http'),
      url = require('url');

/////////////////// FUNCTIONS //////////////////////

function startHealthCheckServer(port, endpoint, cb) {
  http.createServer((request, response) => {
    let eP = url.parse(request.url, true).pathname;
    if (endpoint === eP) {
      response.writeHead(200);
      response.end('server is healthy');
    } else {
      response.writeHead(404);
      response.end('endpoint not found');
    }
  }).listen(port, cb);
}

//////////////////// EXPORTS ///////////////////////

module.exports = startHealthCheckServer;

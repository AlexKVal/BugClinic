var createServer = require('http').createServer;
var server = createServer(function (req, res) {
  res.end('hello');
}).listen(9876, function () {
  console.log('listening');
});

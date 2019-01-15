var http = require('http');
var moment = require('moment');


function serverCallback (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end("Hello world" + process.argv[2]);
  // full format of time and date
  // res.end("Hello" + " it is " + moment().format());
  // better format of time and date
  res.end("Hello" + " it is " + moment().format('LLLL'));

}
http.createServer(serverCallback).listen(8080);

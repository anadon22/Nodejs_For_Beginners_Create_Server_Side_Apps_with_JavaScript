var http = require('http');
var moment = require('moment');


function serverCallback (req, res) {
  var startTime = "10:00";
  var endTime = "12:00";
  var currentTime = moment().format('LTS');
  res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello Zenva!\
    Welcome to our page.\
    Now, it is "+ currentTime+".\
    Our business hours is from " + startTime + " to " + endTime + ".\
    Please come back in "+ moment(startTime).diff(currentTime, 'minutes')+".");

}
http.createServer(serverCallback).listen(8080);

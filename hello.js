var http = require('http');
var moment = require('moment');


function serverCallback (req, res) {
  var startTime = "10:00";
  var endTime = "12:00";
  var currentTime = moment().format('HH:mm');
  // var diff = moment(endTime.diff(startTime, "minutes"), "mm")

  var msg = "Hello" + process.argv[2] + "!\n";
  msg += "Welcome to out page.\n";
  msg += "Now, it is " + currentTime + ".\n";
  msg += "Our business hours is from " + startTime + " to " + endTime + ".\n";
  msg += "Please come back in ";



  // var difference = startTime.diff(currentTime, 'minutes');

  res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(msg);

}
http.createServer(serverCallback).listen(8080);

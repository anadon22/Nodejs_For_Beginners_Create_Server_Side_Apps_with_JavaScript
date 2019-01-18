var http = require('http');
var moment = require('moment');


function serverCallback (req, res) {
  var startTime = moment("10:00", "HH:mm");
  var endTime = moment("12:00", "HH:mm");
  var currentTime = moment();
  // var diff = moment(endTime.diff(startTime, "minutes"), "mm")

  var msg = "Hello " + process.argv[2] + "!\n";
  msg += "Welcome to out page.\n";
  msg += "Now, it is " + currentTime.format('HH:mm') + ".\n";
  msg += "Our business hours is from " + startTime.format("HH:mm") + " to " + endTime.format("HH:mm") + ".\n";

  msg += "Hello Luka :-)";
  var startTimeDiff = startTime.diff(currentTime, 'minutes');
  var endTimeDiff = currentTime.diff(endTime, 'minutes');

  if (startTimeDiff > 0) {
    // business isnt opet jet, come back in xxx minutes
    msg += "Please come back in " + startTimeDiff + "minutes.";
  }
  if (endTimeDiff > 0) {
    //business opens tomorrow
    msg += "Please come back tomorrow.";
  }

  // var difference = startTime.diff(currentTime, 'minutes');

  res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(msg);
}
http.createServer(serverCallback).listen(8080);

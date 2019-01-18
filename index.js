var http = require('http');
var request = require('request');
var request_body = undefined;

function createHtmlStringFromJson(retrievedData) {
  var html_string = '<html>\n<header>\n<title>Data agregator</title>\n</header>\n';
  html_string += '<body>\n<table>\n';
  html_string += '<tr>\n';

// kreiranje headera u prvom retku tablice
  for(var attribute in retrievedData[0]) {
    if(typeof retrievedData[0][attribute] !== 'object') {
      html_string += '<td>' + attribute + '</td>\n';
    }
  }
  html_string += '</tr>\n';

// generiranje podataka u redove tablice
  retrievedData.forEach(function(object) {
    html_string += '<tr>\n';
    for (var attribute in object) {
      if (typeof(object[attribute]) !== 'object') {
        html_string += '<td>\n' + object[attribute] + '</td>\n';
      }
    }
    html_string += '</tr>\n';
  });
  html_string += '</body>\n</html>\n' ;
  return html_string;

}
request('https://www.bnefoodtrucks.com.au/api/1/trucks', function (err, request_res, body) {
  request_body = body;
});

http.createServer(function(req, res) {
  // ako postoji responsee  - request body
  if(request_body) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //
    res.end(createHtmlStringFromJson(JSON.parse(request_body)));
  } else {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end("Wait for data to load");
  }
}).listen(8080);

// fs.readFile('./index.js', function(err, html) {
//   if(err) {
//     throw err;
//   }
//   html_content = html;
// });

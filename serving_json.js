var http = require('http'); 			
var fs = require('fs');

var server = http.createServer(function(req, res){  			//the res is a writeable stream
	console.log('request was made' +req.url)
	res.writeHead(200, {'Content-Type': 'application/json'});			//id's the response type as JSON
	var myObject = {
		name: 'Lundy',
		job: 'being a dog and sleeping',
		age: 6
		};
	res.end(JSON.stringify(myObject));   //.end expects a string or a buffer JSON.stringify turns the object into a string													
});	

server.listen(4000, '127.0.0.1'); 						
console.log('listening on port 4000');	
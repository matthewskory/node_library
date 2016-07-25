//notes on Node servers

//headers - extra info about a request or response	
	//Content-Type (html, text/plain, json)
	//status (200 - it's working, 404 - page not found)

var http = require('http'); 			

var server = http.createServer(function(req, res){
	console.log('request was made')
	res.writeHead(200, {'Content-Type': 'text/plain'});		//creates header with status of 200
	res.end('server is working');							
});	

server.listen(4000, '127.0.0.1'); 						//node is listening to port 4000
console.log('listening on port 4000');					//logs the message





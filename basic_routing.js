//basic routing - express makes everything better
//** will throw error! index, contact and 404 pages were not created for the sake of 
		//time include them in the root of this dir if you want to test.

var http = require('http'); 
var fs = require('fs');			


var server = http.createServer(function(req, res){  			//the res is a writeable stream
	console.log('request was made' +req.url);					//.url is a property of request
	if(req.url === '/home' || req.url ==='/'){					//if url is pointed here serve index page	
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'})	
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	else if(req.url === '/api/ninjas'){
		var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age:32}]
		res.writeHead(200, {'Content-Type': 'json/application'})	
		res.end(JSON.stringify(ninjas));					
	} else{
		res.writeHead(404, {'content/type': 'text/html'})
		fs.createReadStream(__dirname + '/error.html').pipe(res);
	};	
});
server.listen(4001, '127.0.0.1'); 						
console.log('listening on port 4001');	
//streams and buffers - 
	//buffer is a temp storage spot for data being transfered
	//buffer is filled with data and then passed on 
	//stream is the stream of data from beginning to end including the buffer

	//duplex streams can both read and write

var http = require('http');
var fs = require('fs');

//readable streams ----------------------------------------------------------

//creates a var which takes a file specified here plus the utf8 option 
// var myReadStream = fs.createReadStream( __dirname +'/lorem_ipsum_dummy_data.txt', 'utf8' );		
// //console logs each buffered chunk as it is read
// myReadStream.on('data', function(chunk){
// 	console.log('new chunk recieved:');
// 	console.log(chunk);
// });


//writeable streams -------------------------------------------------------
	
// creates a new file to be created that is named in the ( ) 
// var myWriteStream = fs.createWriteStream( __dirname +'/writeMe.txt')

// myReadStream.on('data', function(chunk){
// 	//writes the stream output to myWriteStream
// 	myWriteStream.write(chunk);
// 	console.log('new file created');
	
// });

//pipes---------------------------------------------------------
 //only work on readable streams to writeable

//myReadStream.pipe(myWriteStream);

//using pipes with a response to a server--------------------------

var http = require('http'); 			


var server = http.createServer(function(req, res){  			//the res is a writeable stream
	console.log('request was made' +req.url)
	res.writeHead(200, {'Content-Type': 'text/plain'});			//id's the response type as plain text
	var myReadStream = fs.createReadStream( __dirname +'/lorem_ipsum_dummy_data.txt', 'utf8' );
	myReadStream.pipe(res);										//pipes the read stream to the response					
});	

server.listen(4000, '127.0.0.1'); 						

console.log('listening on port 4000');	



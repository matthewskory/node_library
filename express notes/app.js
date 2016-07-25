//run nodemon app.js in console to autorestart server

//basic routes using express ------------------------------------------------
var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send('homepage'); // res.send(--dirname + '/index.html') would send selected index page
});
app.get('/contact', function(req, res){
	res.send('contact');  						//express recognizes the content type automatically					
});
// app.get('/profile/:id', function(req , res){
// 	res.send('you requested to see a profile with the id of '+ req.params.id); //req.params.id will return what ever ID is provided int the url
// });



//template engine example --------------------using ejs---------------------


	//to use template engine use app.set
	//will look in view folder by default
	//review the notes in profile.ejs for more information
app.set('view engine', 'ejs');

//when using templates you'll use res.render(dynamic stuff) instead of res.send(static stuff)
app.get('/profile/:name', function(req, res){
	//instead of getting from the url you can get it from an object use .notation to acess values within the obj
  	var data = {age: 32, job: 'programmer', hobbies: ['eating', 'reading', 'travel']};
  	 //res.render('profile.ejs' , object to be rendered)
	res.render('profile', {person: req.params.name, data: data});
});


//static files (images and css) also need served just like dynamic pages - enter MIDDLEWARE--------
					
	//express will include static files using the below syntax 				
app.use('/assets', express.static('assets'))

	

app.listen(3002);



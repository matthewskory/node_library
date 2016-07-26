var express = require('express');
var todoController = require('./controllers/todocontroller.js');

var app = express();

//set template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public')); //express.static is built in middleware for serving static files


//fire controllers
todoController(app);


//listen to port
app.listen(4004);
console.log('listening on port 4004');
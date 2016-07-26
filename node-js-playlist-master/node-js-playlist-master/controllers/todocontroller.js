var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@ds029725.mlab.com:29725/todo_app');

//create schema 
var todoSchema = new mongoose.Schema({
	item: String
});

//create todo model - based on schema
var Todo = mongoose.model('Todo', todoSchema);
//test data for database -------------------------------------------------
// var itemOne = Todo({item: "dig some holes in the woods"}).save(function(err){
// 	if (err) throw err;
// 	console.log('item saved');
// });

//dummy data for local------------------------------------------------------
//var data = [{item: 'walk pet duck'},{item:'eat some vegetables'},{item:'punch a nun'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res){
	//get data from mongo and pass to view
	Todo.find({}, function(err, data){ //empty object gets all items, specify the item to get a single item returned
		if (err) throw error;
		res.render('todo', {todos: data});	
	}) 
	
});


app.post('/todo', urlencodedParser,	function(req, res){
	//get data from the view and add it to mongodb
	var newTodo = Todo(req.body).save(function(err, data){
		if (err) throw err;
		res.json(data);
	})
});

// grab the item name out of the url using ajax delete request on todo-list.js 
app.delete('/todo/:item', function(req, res){

	Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
		if (err) throw err;
		res.json(data);
	});
	//commented out portions used in the static file --------------------------------------
	// //filter the data list using the attached function
	// data = data.filter(function(todo){
	// 	//checks the items in data and compares it to the req.params.item from the url. remove the one in the url.
	// 	return todo.item.replace(/ /g, '-') !== req.params.item;
	});
	// res.json(data);


};
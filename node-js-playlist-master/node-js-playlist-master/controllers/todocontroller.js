var bodyParser = require('body-parser');


var data = [{item: 'walk pet duck'},{item:'eat some vegetables'},{item:'punch a nun'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){


app.get('/todo', function(req, res){
	res.render('todo', {todos: data});
});


app.post('/todo', urlencodedParser,	function(req, res){
	data.push(req.body);
	res.json(data);
});

// grab the item name out of the url using ajax delete request on todo-list.js 
app.delete('/todo/:item', function(req, res){
	//filter the data list using the attached function
	data = data.filter(function(todo){
		//checks the items in data and compares it to the req.params.item from the url. remove the one in the url.
		return todo.item.replace(/ /g, '-') !== req.params.item;
	});
	res.json(data);
});

};
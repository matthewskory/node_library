//Query Strings

//additional data added to an http request in the form of a name:value pair

//www.mysite.com/blog/news?page=2&keyword=stuff&.....
	//start has a ? and name and values are seperated by an = add addtl queries using an &
	//parse the request and pull out the data

//example----------------------------------------------------------------------

//www.mysite.com/contact?dept=marketing&person=joe

app.get('/contact', function(req, res){
	console.log(req.query); //req.query gets the data logs it {dept: 'marketing', person: 'joe'}
	res.render('contact'); //retuns the contact page
});

//req.query is an object that can be passed back to the client like this 
	//res.render('contact', {qs: res.query});
	//access it using .notation just like any other object qs.dept in this case

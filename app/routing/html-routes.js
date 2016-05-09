// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
var path = require('path');

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. They are sent a HTML page of content
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}
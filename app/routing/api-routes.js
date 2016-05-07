
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends 		= require('../data/friends.js');
var path 			= require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){


// 	Your api-routes.js file should include two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.



app.get('/api/friends', function(req, res){
	res.json(friendsData);
});


app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		if(friendsData.length < 10 ){
			friendsData.push(req.body);
			res.json(true); // KEY LINE
		}

		else{
			res.json(false); // KEY LINE
		}

	});

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


app.post('/api/friends-check', function(req, res){


		/// This route checks the array of survey answers in ( req.body ) sent to it vs the database of friends in friends.js

if (friends-check.body<friendsArray.body){

}

else



console.log(friends);
console.log(req.body);





res.json("Angel");


		/// this route returns to the API caller (ajax on the front end) the name of a matched friend or 0 for no friend matches







	// 	else{
	// 		res.json(false); // KEY LINE
	// 	}

	 });

}
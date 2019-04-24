var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//variable to install mongoose technologies used for establishing server connection
var mongoose = require('mongoose');

// connection string linking to mlab database which contains both the collections
// to which the relevent and appropriate data is sent 
var mongoDB = 'mongodb://cooke94:password1@ds139883.mlab.com:39883/lab5rc';
mongoose.connect(mongoDB);

//Schema
// creates the variable Schema making it a new instance of a Schema belonging to 
// the installed mongoose technologies
var Schema = mongoose.Schema;

//format for the entries for creating user reviews
var postSchema = new Schema({
  title: String,
  content: String,
  city: String,
  rating: Number
});

//format for entries for creating upcoming user journeys
var upcomingSchema = new Schema({
  country:String,
  city: String,
  year: Number
})

//Posts the relevent and correct data to mlab database and correct collection
//Posts the user created reviews to correct collection
var PostData = mongoose.model('post', postSchema);
// Posts the user created reveiws to the corremct collection
var UpcomingData = mongoose.model('upcoming', upcomingSchema);

//Configues express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//post for reviews
//Includes correct url for viewing review data in collection
app.post('/api/posts', function(req, res){
  //logs when a succesful post has been made to the user console
  console.log("post successful");
  
  //logs the details that have been sent as part of review by the user
  //to the console
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body.rating);
  console.log(req.body.city);

  //creates a new review item 
  PostData.create({
    title:req.body.title,
    content:req.body.content,
    city:req.body.city,
    rating:req.body.rating
  });

  //sends a response from the server as a follow up to request
  //Without this a minor error is thrown as a response is expected
  res.send("Review added ");

})

//post for upcoming
//Includes the correct url for viewing upcoming data in the collection
app.post('/api/upcoming', function(req, res){
  //logs when a succesfull post has been made to the console
  console.log("post successful");
  
  //Logs the details the user is adding for an upcoming item
  console.log(req.body.country);
  console.log(req.body.city);
  console.log(req.body.year);

  //Creates a new upcoming item 
  UpcomingData.create({
    country:req.body.country,
    city:req.body.city,
    year:req.body.year
  });

  //sends response from the server as a follow up to request
  //Without this a minor error is thrown as a response is expected
  res.send("Upcoming journey added added");

})

//returning the data of api/posts
app.get('/api/posts', function(req, res){

  PostData.find(function(err,data){

    res.json(data);
  })
})

//returning the data of api/upcoming
app.get('/api/upcoming', function(req, res){
  UpcomingData.find(function(err,data){
    if(err)
      console.log(err);
    res.json(data);
  })
})

//update for reviews
app.get('/api/posts/:id', function(req, res){
  //logs the id of the item to be updated to the console
  console.log("Read doc with ID" + req.params.id);

  //finds the specified post to be updated via the id mlabs provides for every json item
  PostData.findById(req.params.id, function (err, data) {
    res.json(data);
  });
})

//update for upcoming
app.get('/api/upcoming/:id', function(req, res){
  //logs the id of the item to be updated to console
  console.log("Read doc with ID" + req.params.id);

  //finds the specified post to be updated via the id mlabs provides for every json item
  UpcomingData.findById(req.params.id, function (err, data) {
    res.json(data);
  });
})

//update for reviews
app.put('/api/posts/:id', function(req, res){
  console.log("Update called on " + req.params.id);
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body.city);
  console.log(req.body.rating);

  //finds the specified post to be updated via the id mlabs provides for every json item
  PostData.findByIdAndUpdate(req.params.id, req.body,
    function(err, data){
      res.send(data);
    })
})

//update for upcoming
app.put('/api/upcoming/:id', function(req, res){
  console.log("Update called on " + req.params.id);
  console.log(req.body.country);
  console.log(req.body.city);
  console.log(req.body.year);

  //finds the specified post to be updated via the id mlabs provides for every json item
  UpcomingData.findByIdAndUpdate(req.params.id, req.body,
    function(err, data){
      res.send(data);
    })
})

//delete for posts
app.delete('/api/posts/:id', function(req,res){
  //outputs the specified items id to the console
  console.log(req.params.id);

  //deletes the specified item by comparing the selected items id to the id mlabs has
  //assigned the item in the collection
  PostData.deleteOne({_id:req.params.id}, function(err, data){
    //if an error is thrown because the id can not be matched then the response is an error
    //else the repsonse is the appropriate data
    if(err)
      res.send(err);
    res.send(data);
  });
})

//delete for upcoming
app.delete('/api/upcoming/:id', function(req, res){
  //outputs the specified items id to the console
  console.log(req.params.id);

  //deletes the specified item by comparing the selected items id to the id mlabs has
  //assigned the item in the collection
  UpcomingData.deleteOne({_id:req.params.id}, function(err,data){
    //if an error is thrown because the id can not be matched then the response is an error
    //else the repsonse is the appropriate data
    if(err)
      res.send(err);
    res.send(data);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  //outputs the host and port number the appilcation can be viewed on to the console
  console.log("Example app listening at http://%s:%s", host, port)
})

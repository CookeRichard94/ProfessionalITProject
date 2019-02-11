var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//variable to install mongoose
var mongoose = require('mongoose');

//connection string linking to mlab database
var mongoDB = 'mongodb://cooke94:password1@ds139883.mlab.com:39883/lab5rc';
mongoose.connect(mongoDB);

//Schema
var Schema = mongoose.Schema;

//format for the entries for reviews
var postSchema = new Schema({
  title: String,
  content: String,
  city: String,
  rating: Number
});

//format for entries for upcoming journeys
var upcomingSchema = new Schema({
  country:String,
  city: String,
  year: Number
})

//Posts data to mlab database
var PostData = mongoose.model('post', postSchema);
var UpcomingData = mongoose.model('upcoming', upcomingSchema);

//Here we are configuring express to use body-parser as middle-ware.
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
app.post('/api/posts', function(req, res){
  console.log("post successful");
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body.rating);
  console.log(req.body.city);

  PostData.create({
    title:req.body.title,
    content:req.body.content,
    city:req.body.city,
    rating:req.body.rating
  });

  res.send("Review added ");

})

//post for upcoming
app.post('/api/upcoming', function(req, res){
  console.log("post successful");
  console.log(req.body.country);
  console.log(req.body.city);
  console.log(req.body.year);

  UpcomingData.create({
    country:req.body.country,
    city:req.body.city,
    year:req.body.year
  });

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
  //console.log("upcoming");
  UpcomingData.find(function(err,data){
    if(err)
      console.log(err);
    res.json(data);
  })
})

//update for reviews
app.get('/api/posts/:id', function(req, res){
  console.log("Read doc with ID" + req.params.id);

  PostData.findById(req.params.id, function (err, data) {
    res.json(data);
  });
})

//update for upcoming
app.get('/api/upcoming/:id', function(req, res){
  console.log("Read doc with ID" + req.params.id);

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

  UpcomingData.findByIdAndUpdate(req.params.id, req.body,
    function(err, data){
      res.send(data);
    })
})

//delete for posts
app.delete('/api/posts/:id', function(req,res){
  console.log(req.params.id);

  PostData.deleteOne({_id:req.params.id}, function(err, data){
    if(err)
      res.send(err);
    res.send(data);
  });
})

//delete for upcoming
app.delete('/api/upcoming/:id', function(req, res){
  console.log(req.params.id);

  UpcomingData.deleteOne({_id:req.params.id}, function(err,data){
    if(err)
      res.send(err);
    res.send(data);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})

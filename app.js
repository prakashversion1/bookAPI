var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

bookRouter.route('/Books')
    .get(function(req,res){
        Book.find(function(err,books){
            if(err)
                console.log(err);
            else
                res.json(books);
        });
});

app.use('/api',bookRouter);

app.get('/',function(req,res){
	res.send('Welcome to my api');
});

app.listen(port,function(){
	console.log('Running on port : ' + port);
});

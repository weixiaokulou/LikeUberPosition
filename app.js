const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Point =require('./models/point');

// Connect to Mongoose
mongoose.connect('mongodb://rachel:xiaobushi@ds113636.mlab.com:13636/uberlikewebapp');
// mongoose.connect('mongodb://thunder.cise.ufl.edu:27017/uberlikewebapp');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/points ');
});

app.get('/api/points', (req, res) => {
	Point.getPoints((err, points) => {
		if(err){
			throw err;
		}
		res.json(points);
	});
});

app.get('/api/points/:_id', (req, res) => {
	Point.getPointById(req.params._id, (err, point) => {
		if(err){
			throw err;
		}
		res.json(point);
	});
});

app.post('/api/points', (req, res) => {
	var point = req.body;
	Point.addPoint(point, (err, point) => {
		if(err){
			throw err;
		}
		res.json(point);
	});
});

app.put('/api/points/:_id', (req, res) => {
	var id = req.params._id;
	var point = req.body;
	Point.updatePoint(id, point, {}, (err, point) => {
		if(err){
			throw err;
		}
		res.json(point);
	});
});

app.delete('/api/points/:_id', (req, res) => {
	var id = req.params._id;
	Point.removePoint(id, (err, point) => {
		if(err){
			throw err;
		}
		res.json(point);
	});
});

app.listen(3000);
console.log('Running on port 3000...');

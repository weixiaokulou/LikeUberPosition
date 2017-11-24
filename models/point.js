const mongoose = require('mongoose');

var pointSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	latitude:{
		type: String,
		required: true
	},
	longitude:{
		type: String,
		required: true
	}
});

const Point = module.exports = mongoose.model('Point', pointSchema);

// Get Points
module.exports.getPoints = (callback, limit) => {
	Point.find(callback).limit(limit);
}

// Get point
module.exports.getPointById = (id, callback) => {
	Point.findById(id, callback);
}

// Add point
module.exports.addPoint = (point, callback) => {
	Point.create(point, callback);
}

// Update point
module.exports.updatePoint = (id, point, options, callback) => {
	var query = {_id: id};
	var update = {
		title: point.title,
		latitude: point.latitude,
		longitude: point.longitude,
	}
	Point.findOneAndUpdate(query, update, options, callback);
}

// Delete point
module.exports.removePoint = (id, callback) => {
	var query = {_id: id};
	Point.remove(query, callback);
}

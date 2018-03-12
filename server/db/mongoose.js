var mongoose = require('mongoose');

console.log('NODE ENV',process.env.NODE_ENV);
console.log(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

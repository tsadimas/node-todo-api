var mongoose = require('mongoose');
const nconf = require('nconf');
const fs = require('fs');

nconf.argv().env().file({ file: 'keys.json'});

const user = nconf.get('mongoUser');
const pass = nconf.get('mongoPass');
const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');

console.log(user);
var uri = `mongodb://${user}:${pass}@${host}:${port}`;
if (nconf.get('mongoDatabase')) {
    uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
console.log(process.env.MONGODB_URI || uri);

mongoose.Promise = global.Promise;
mongoose.connect(uri);

module.exports = {mongoose};

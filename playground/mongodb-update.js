const nconf = require('nconf');
const fs = require('fs');
const {MongoClient, ObjectID}= require('mongodb');
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
console.log(uri);


MongoClient.connect(uri, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('tsadimas');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aa15b9865e6dc006a2c2c89')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Andrew'
    }, {
        $set: {
            name: 'Argiris'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});

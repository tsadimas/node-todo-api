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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Argiris'}).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5aa15daa65e6dc006a2c471c")}).then((result) => {
        console.log(result);
    });
});

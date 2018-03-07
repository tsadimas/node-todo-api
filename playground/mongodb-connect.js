const nconf = require('nconf');
const fs = require('fs');

// const MongoClient = require('mongodb').MongoClient;
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



    MongoClient.connect(uri, (err, client) => {
        if (err) {
            return console.log(`Unable to connect to MongoDB server ${err}`);
        }

        console.log('Connected to MongoDB server');
        const db = client.db('tsadimas');
        db.collection('Todos').insertOne({
                text: 'Something to do',
                completed: false
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });

        // insert new doc into  the Users (name, age, location)
        //  db.collection('Users').insertOne({
                //          name: 'Argiris',
                //          age: 38,
                //          location: 'Athens'
                //  }, (err, result) => {
                    //      if (err) {

                        //          return console.log('Unable to insert user', err);
                        //      }

                    //      console.log(result.ops[0]._id.getTimestamp());
                    //  });

            client.close();
    });

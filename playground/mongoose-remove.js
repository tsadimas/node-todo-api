const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });


Todo.findOneAndRemove({_id: '5aa2833d65e6dc006a3dce2c'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5aa2833d65e6dc006a3dce2c').then((todo) => {
    console.log(todo)
});

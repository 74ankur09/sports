const express = require("express");
const { title } = require("process");
const { updateMany } = require("../models/taskModel");
const Task = require("../models/taskModel")

const tasksRouter = express.Router();


tasksRouter.get('/', (req, res) => {
    console.log('get all ')
    Task.find({}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log( docs);
            return res.status(200).send({'tasks':docs});
        }
    });
})

tasksRouter.get('/:id', (req, res) => {
    _id = req.params.id
    Task.find({'_id' : _id}, function (err, docs) {
        console.log(docs)
        if (err || !docs.length){
            console.log(err);
            return res.status(404).send({'error': "There is no task at that id"});
        }
        else{
            console.log("First function call : ", docs)
            var send_data = {'_id': docs[0]._id, 'title': docs[0].title, 'is_completed': docs[0].is_completed}
            return res.status(200).send(send_data);
        }
    });
})

tasksRouter.delete('/:id', (req, res) => {
    _id = req.params.id
    Task.findOneAndDelete({_id : _id}, function (err, docs) {
        if (err){
            console.log(err);
            return res.status(204).send({})
        }
        else{
            console.log("First function call : ", docs);
            return res.status(204).send({});
        }
    });
})

tasksRouter.put('/:id', (req, res) => {
    console.log('put all ---------------------------')
    _id = req.params.id
   var title = req.body.title;
    var is_completed = req.body.is_completed;
    console.log(title, _id)
    var Updated_value ={'title':title,'is_completed':is_completed}
    Task.findByIdAndUpdate(_id, Updated_value,{new:true},
                            function (err, docs) {
    if (err ){
        console.log(err)
        return res.status(404).send({ 
            error: "There is no task at that id"
        }
        );
    }
    else{

        console.log("Updated User : ", docs);
        return res.status(204).send({});
    }
});
})

tasksRouter.post('/',  async (req, res) => {
    console.log('post all ---------------------------')
    console.log(req.body)

    var title = req.body.title;
    is_completed = req.body.is_completed;
    console.log(title)
    var task = new Task(req.body);

    //console.log(okSave)



    task.save().then( async () => {
        console.log(task)
        return res.status(201).send({'id':task._id});
    }).catch( (e) => {
        console.log(e)
        return res.status(400).send(e);
    })

})


module.exports = tasksRouter;

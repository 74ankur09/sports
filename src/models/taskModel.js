const mongoose = require("mongoose")
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose);
 
const taskSchema = new Schema({
    title: {
        type: String
    },
    id:{
        
    },
    is_completed: {
        type: Boolean,
        default:true
    },
}, {
    versionKey: false 
})





taskSchema.plugin(autoIncrement.plugin, { model: 'Task' });



const Task = mongoose.model('Task', taskSchema);

module.exports = Task

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const taskSchema = new mongoose.Schema({
    title: {
    type: String,
    trim: true,
    required: [true],
    minlength: [5],
    unique: true
    },
    description: {
    type: String,
    trim: true,
    },
    completed: {
    type: Boolean,
    required: true,
    default: false
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }
});
taskSchema.plugin(AutoIncrement, {inc_field: 'task_id'});
const Task = mongoose.model("tasks", taskSchema);

const TaskModel = {
    createTask : function( newTask ){
        return Task.create( newTask );
    },
    getAllTasks : function(){
        return Task.find();
    },
    getTaskByName : function( title ){
        return Task.findOne({ title });
    },
    delete : function( title ){
        return Task.deleteOne({ title });
    },
    updateTask: function(id, data){
        return Task.findOneAndUpdate({id:id},{$set:data})
    }
};

module.exports = {TaskModel};
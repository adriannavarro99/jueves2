const express = require("express");
const { get } = require("http");
const route = express.Router();
const {TaskController} = require('./../controllers/ApiController');


ApiRouter
    .get( '/tasks', TaskController.allTasks );
ApiRouter
    .post('/tasks', TaskController.addTask);
ApiRouter
    .delete('/remove/:title', TaskController.removeTask );
ApiRouter
    .get('/tasks/:title', TaskController.findByName );
ApiRouter
    .put('/tasks/:title', TaskController.update );

module.exports = {route}
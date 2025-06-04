const express = require('express');
const routes = express.Router();
const {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,
    editTask
} = require('../controllers/tasks.js');

routes.route('/').get(getAllTasks).post(createTask);
routes.route('/:id').put(updateTask).delete(deleteTask).get(getSingleTask).patch(updateTask).put(editTask);

module.exports = routes;
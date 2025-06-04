const express = require('express');
const routers = express.Router();

const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs');

routers.route('/').post(createJob).get(getAllJobs);
routers.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = routers;
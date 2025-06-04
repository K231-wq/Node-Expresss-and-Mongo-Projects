const Job = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId}).sort('createdAt');
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
}

const getJob = async (req, res) => {
    const {
        user: { userId },
        params: {id: jobId}
    } = req;

    const job = await Job.findOne({
        _id: jobId,
        createdBy: userId
    });
    if(!job){
        throw new NotFoundError(`No job with such ID: ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
}

const createJob = async (req, res) => {
    // res.json(req.user);
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.OK).json({ job });
}
const updateJob = async (req, res) => {
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId }
    } = req;
    if(company === '' || position === ''){
        throw new BadRequestError('Comapany and Position cannot be empty');
    }
    const job = await Job.findOneAndUpdate(
        {_id: jobId, createdBy: userId},
        req.body,
        {   
            new: true, 
            runValidators: true
        }
    );
    if(!job){
        throw new NotFoundError(`No job with such ID: ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
}
const deleteJob = async (req, res) => {
    const {
        user: {userId},
        params: {id: jobId},
    } = req;
    const job = await Job.findOneAndDelete({
        _id: jobId,
        createdBy: userId
    })
    if(!job){
        throw new NotFoundError(`No job with such ID: ${jobId}`);
    }
    res.status(StatusCodes.OK).json({msg: `SUCCESSFULLY DELETED`, data: {id: job._id, company: job.company, position: job.position}});
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};
const Task = require('../models/tasks.js');
const asyncWrapper = require('../middleware/async.js');
const {createCustomError} = require('../errors/custom-error.js');
const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    // try {
    //     const tasks = await Task.find({});
    //     res.status(200).json({ tasks });
    //     // res.status(200).json({tasks, amound: tasks.length})
    //     // res.status(200).json({status: "true", data: {tasks, limit: tasks.length}});
    // } catch (error) {
    //     res.status(500).json({msg: error});
    // }
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task){
        return next(createCustomError(`NO TASK WITH ID: ${taskID}`, 404));
    }
    res.status(200).json({task});
    // try {
    //     const {id: taskID} = req.params;
    //     const task = await Task.findOne({_id: taskID});
    //     if(!task){
    //         res.status(404).json({msg: `TASK IS NOT FOUND 404! = ${taskID}`});
    //     }
    //     res.status(200).json({task});
    // } catch (error) {
    //     res.status(500).json({msg: error});
    // }
});

const createTask = asyncWrapper(async (req, res) => {
    //Using middleware wrapper
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    // try{
    //     const task = await Task.create(req.body);
    //     res.status(201).json({ task });
    // }catch(err){
    //     res.status(500).json({msg: err});
    // }
});

const updateTask = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    if(!task){
        return next(createCustomError(`NO TASK WITH ID: ${taskID}`, 404));
    }
    res.status(200).json({ task });
    // try {
    //     const {id: taskID} = req.params;
    //     const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
    //         new: true,
    //         runValidators: true,
    //     });
    //     if(!task){
    //         res.status(404).json({Success: false, msg: `THERE IS NO MATCH ID WITH: ${taskID}}`});
    //     }
    //     // const all = await Task.find({});
    //     // res.status(200).json({task: all});
    //     res.status(200).json({ task });
    // } catch (error) {
    //     res.status(500).json({msg: error})
    // }
});

const deleteTask = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task){
        return next(createCustomError(`NO TASK WITH ID: ${taskID}`, 404));
    }
    res.status(201).json({task: task});
    // try {
    //     const {id: taskID} = req.params;
    //     const task = await Task.findOneAndDelete({_id: taskID});
    //     if(!task){
    //         res.status(404).json({msg: `THERE NO ID MATCH WITH ${taskID}`});
    //     }
    //     res.status(201).json({task: task});
    // } catch (error) {
    //     res.status(500).json({message: error});
    // }
});

const editTask = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
        overwrite: true
    });
    if(!task){
        return next(createCustomError(`NO TASK WITH ID: ${taskID}`, 404));
    }
    res.status(200).json({ task });
    // try {
    //     const {id: taskID} = req.params;
    //     const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {
    //         new: true,
    //         runValidators: true,
    //         overwrite: true
    //     });
    //     if(!task){
    //         res.status(404).json({Success: false, msg: `THERE IS NO MATCH ID WITH: ${taskID}}`});
    //     }
    //     // const all = await Task.find({});
    //     // res.status(200).json({task: all});
    //     res.status(200).json({ task });
    // } catch (error) {
    //     res.status(500).json({msg: error})
    // }
});
module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,
    editTask
};
const express = require('express');
const router = express.Router();

// Load Task model
const Task = require('../models/Task');

// @route   GET api/test
// @desc    Tests  route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Works' }));


// @route   GET api/addTask
// @desc    addTask
router.post(
    '/addTask',

    (req, res) => { 
        const newTask = new Task({
        name: req.body.name,  
        description: req.body.description, 
        startdate: req.body.startdate, 
        enddate: req.body.enddate, 
        });
        console.log(newTask);
      newTask.save().then(post => res.json(post));
    }
  );

// @route   GET api/viewTask
// @desc    addTask
router.get(
  '/viewTask',

  (req, res) => { 
    Task.find()    
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  }
);

// @route   POST api/completeTask
// @desc    complete task
router.get(
  '/completeTask/:id',
  
  (req, res) => {

      console.log( req.params.id);
    
        Task.findOneAndUpdate(
          { _id: req.params.id },
          { $set :{status: "true"} },
          { new: true }
          
        ).then(tasks => res.json(tasks))
   
 
  }
);

// @route   GET api/tasks/:id
// @desc    Get post by id
// @access  Public
router.get('/viewTask/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err =>
      res.status(404).json({ notaskfound: 'No task found with that ID' })
    );
});


  module.exports = router; 
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
router.post(
  '/editTask',

  (req, res) => {

    
    const taskFields = {};
    if (req.body._id) taskFields._id = req.body._id;
    if (req.body.name) taskFields.name = req.body.name;
    if (req.body.description) taskFields.description = req.body.description;
    if (req.body.startdate) taskFields.startdate = req.body.startdate;
    if (req.body.enddate) taskFields.enddate = req.body.enddate;
    console.log(taskFields);

    Task.findOneAndUpdate(
      { _id: req.body._id },
      { $set: taskFields},
      { new: true }

    ).then(tasks => res.json(tasks))

  }
);

// @route   POST api/completeTask
// @desc    complete task
router.get(
  '/completeTask/:id',

  (req, res) => {

    Task.findOne({ _id: req.params.id }).then(task => {
      console.log(task);
      if (task.status === "true") {
        // Update
        Task.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { status: "false" } },
          { new: true }

        ).then(tasks => res.json(tasks))


      } else {

        Task.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { status: "true" } },
          { new: true }

        ).then(tasks => res.json(tasks))

      }
    });
  }
);



// @route   GET api/tasks/:id
// @desc    Get post by id
router.get('/viewTask/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err =>
      res.status(404).json({ notaskfound: 'No task found with that ID' })
    );
});


// @route   DELETE api/tasks/:id
// @desc    Delete task
router.delete(
  '/deleteTask/:id',

  (req, res) => {

    Task.findById(req.params.id)
      .then(task => {

        task.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ tasknotfound: 'No task found' }));

  }
);


module.exports = router; 
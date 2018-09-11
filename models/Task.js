const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startdate: {
    type: String,
    required: true
  },
  enddate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "false"
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('tasks', TaskSchema);

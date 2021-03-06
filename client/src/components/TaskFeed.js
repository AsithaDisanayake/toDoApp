import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';

class TaskFeed extends Component {




  render() {
    const { tasks } = this.props;

    if (tasks === null) {

      return (
       <p>No Task to Display...</p>
    );

    } else {

      return tasks.map(task => <TaskList key={task._id} task={task} />);
    }
  }
}

TaskFeed.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskFeed;

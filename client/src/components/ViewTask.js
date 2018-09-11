import React, { Component } from 'react';

import TaskFeed from './TaskFeed';
import { connect } from 'react-redux';
import { viewTask } from '../actions/taskActions'

import { PropTypes } from 'prop-types';
import Landing from './Landing';




class ViewTask extends Component {



  componentDidMount() {
    this.props.viewTask();
  }



  render() {

    const { tasks } = this.props.tasks

    let taskContent;

    if (tasks === null) {
      taskContent = <Landing/>;
    } else {
      taskContent = <TaskFeed tasks={tasks} />;
    }


    return (
      <div className="container">
        <a href="/addtask"> <i className = "fas fa-plus-circle" /> Add Task</a>
        <div className="">
          <br />
          <table className="table table-hover">

            <tbody>

              {taskContent}
           
            </tbody>
          </table>

        </div>
      </div>


    );
  }
}


ViewTask.propTypes = {
  viewTask: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { viewTask })(ViewTask);

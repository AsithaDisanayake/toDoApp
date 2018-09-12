import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from './Landing';
import { withRouter } from 'react-router-dom';

import { getDetails } from '../actions/taskActions';
import { deleteTask } from '../actions/taskActions';

class TaskDetails extends Component {


  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.props.getDetails(this.props.match.params.id);

  }

  onDeleteClick(id){
    this.props.deleteTask(id,this.props.history);
  }


  render() {


    let taskContent;

    if (this.props.task === null) {
      taskContent = <Landing />;
    } else {
    

      taskContent = (
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading">Task Details</div>
            <div className="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{this.props.task.name}</td>

                  </tr>
                  <tr>
                    <td>Details</td>
                    <td>{this.props.task.description}</td>

                  </tr>
                  <tr>
                    <td>Start Date</td>
                    <td>{this.props.task.startdate}</td>

                  </tr>
                  <tr>
                    <td>EndDate</td>
                    <td>{this.props.task.enddate}</td>
                  </tr>

                    <tr>
                    <td>Status</td>
                    <td>{this.props.task.status === "true" ? (<kbd>Completed</kbd>) : (<kbd>Not Completed</kbd>)}</td>
                  </tr>

                </tbody>

              </table>
              <div className="btn-group float-left">
                <button type="button" className="btn btn-success">edit</button>
                <button onClick={this.onDeleteClick.bind(this, this.props.task._id)} type="button" className="btn btn-danger">delete</button>

              </div>
            </div>
          </div>

        </div>
      );

    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {taskContent}

            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-primary mb-3 float-right">
          Back
        </Link>
      </div>

    );
  }
}

TaskDetails.propTypes = {
  getDetails: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
  // task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

  task: state.tasks.task
});

export default connect(mapStateToProps, { getDetails, deleteTask })(withRouter(TaskDetails));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from './Landing';

import { getDetails } from '../actions/taskActions';

class TaskDetails extends Component {


  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.props.getDetails(this.props.match.params.id);

  }



  render() {


    let taskContent;

    if (this.props.task === null) {
      taskContent = <Landing />;
    } else {

    
      taskContent = (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">Task Details</div>
            <div className="panel-body">
              <table class="table table-hover">
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
                    <td>{this.props.startdate}</td>
                    
                  </tr>
                  <tr>
                    <td>EndDate</td>
                    <td>{this.props.enddate}</td>                    
                  </tr>
                 
                </tbody>
              </table>
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

              <Link to="/" className="btn btn-light mb-3">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

TaskDetails.propTypes = {
  getDetails: PropTypes.func.isRequired,
  // task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

  task: state.tasks.task
});

export default connect(mapStateToProps, { getDetails })(TaskDetails);
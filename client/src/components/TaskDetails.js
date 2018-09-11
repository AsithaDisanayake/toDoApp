import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { taskDetails } from '../actions/taskActions';

class TaskDetails extends Component {

  constructor() {
    super();
    this.state = {
      task: {}
     
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.taskDetails(this.props.match.params.id);
    
  }
  
  componentWillReceiveProps(nextprops){

    if (nextprops.task){
      this.setState({task:nextprops.this.props.taskDetails(this.props.match.params.id)})
    }
    
  }

  render() {
 
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {/* {postContent} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskDetails.propTypes = {
  taskDetails: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { taskDetails })(TaskDetails);
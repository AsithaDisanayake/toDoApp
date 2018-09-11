import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

class AddTask extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      startdate: '',
      enddate: ''


    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  onSubmit(e) {
    e.preventDefault();

    const newTask = {
      name: this.state.name,
      description: this.state.description,
      startdate: this.state.startdate,
      enddate: this.state.enddate,

    };

    this.props.addTask(newTask, this.props.history);

console.log(newTask);

  }


  render() {


    return (
      <div className="container">

        <br />



        <form onSubmit={this.onSubmit}>
          <div className="form-group" >
            <label >Title:</label>
            <input type="text" name="name" className="form-control" placeholder="Title" value={this.state.name}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" className="form-control" id="description" value={this.state.description} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label >Start Date:</label>
            <input type="date" name="startdate" className="form-control" id="startdate" value={this.state.startdate} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label >End Date:</label>
            <input type="date" name="enddate" className="form-control" id="enddate" value={this.state.enddate} onChange={this.onChange}/>
          </div>    

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  // tasks: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  // tasks : state.tasks
});

export default connect(mapStateToProps, { addTask })(withRouter(AddTask));
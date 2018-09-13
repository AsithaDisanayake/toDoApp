import React, { Component } from 'react';

import { connect } from 'react-redux';
import { editTask } from '../actions/taskActions';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { getDetails } from '../actions/taskActions';

class EditTask extends Component {

  constructor() {
    super();
    this.state = {
      _id : '',
      name: '',
      description: '',
      startdate: '',
      enddate: ''

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){        
    this.setState({_id:this.props.location.state.task._id});
      this.setState({name:this.props.location.state.task.name});
      this.setState({description:this.props.location.state.task.description});
      this.setState({startdate:this.props.location.state.task.startdate});
      this.setState({enddate:this.props.location.state.task.enddate});
      

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  onSubmit(e) {
    e.preventDefault();

    const updateTask = {
      id_ : this.state._id,
      name: this.state.name,
      description: this.state.description,
      startdate: this.state.startdate,
      enddate: this.state.enddate,

    };

    this.props.editTask(updateTask, this.props.history);



  }


  render() {


    return (
      <div className="container">

        <br />

        EditTask

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

EditTask.propTypes = {
  editTask: PropTypes.func.isRequired,

}



export default connect(null, { editTask })(withRouter(EditTask));
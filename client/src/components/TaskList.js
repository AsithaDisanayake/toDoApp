import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { completeTask } from '../actions/taskActions';

import { PropTypes } from 'prop-types';


class TaskList extends Component {


    onCompleteClick(id) {

        this.props.completeTask(id,this.props.history);
        window.location.reload();

    }

    onViewClick(id) {


        axios
            .get('/api/task/viewById/' + id)
            .then(res => this.props.history.push("/"))
        // .catch(err => this.setState({ errors: err.response.data }));

    }


    render() {

        const { task } = this.props;

        return (
            <tr >

                <td onClick={this.onCompleteClick.bind(this, task._id)}>
                    <span className="float-left">
                        {task.status === "true" ? (<strike>{task.name}</strike>) : <p> {task.name}</p>}
                    </span>

                </td>
                <td onClick={this.onCompleteClick.bind(this, task._id)}>
                    <span className="float-right">
                        {task.status === "true" ? (<i className="fas fa-check" />) : null}
                    </span>
                </td>

                <td >
                    <div className="float-right">
                        {/* <button className = ""> <i className="fas fa-trash-alt" /></button ><span> </span>  */}
                        {/* <button onClick={this.onViewClick.bind(this, task._id)} className = "" >  <i className="fas fa-eye" /></button ><span> </span>   */}
                        {/* <button className = ""> <i className="fas fa-edit" />  </button > */}
                        <Link to={`/taskdetails/${task._id}`} className="btn btn-info mr-1">
                        <i className="fas fa-eye" />
                        </Link>
                    </div>  

                </td>

            </tr>
        );
    }
}



TaskList.propTypes = {
    
    completeTask:PropTypes.func.isRequired,
    task: PropTypes.object.isRequired

};




export default connect(null, { completeTask })(withRouter(TaskList));
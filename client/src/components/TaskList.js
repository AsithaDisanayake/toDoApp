import React, { Component } from 'react';

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
                    <span className="float-right">                       
                        <Link to={`/taskdetails/${task._id}`} className="btn btn-info mr-1">
                        <i className="fas fa-eye" />
                        </Link>
                    </span>  

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
import React, { Component } from 'react';
import axios from 'axios';
// import classnames from 'classnames';

class TableRow extends Component {

    onCompleteClick(id) {
        console.log(id);
      
        axios
      .get('/api/task/completeTask/'+id)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
      }   

    render() {
        return (
            <tr onClick={this.onCompleteClick.bind(this, this.props.obj._id)}>

                <td>
                    {this.props.obj.name}
                </td>
                <td>
              {this.props.obj.status === "true" ? (<i className = "fas fa-check"/>):null}
                </td> 
            </tr>
        );
    }
}

export default TableRow;
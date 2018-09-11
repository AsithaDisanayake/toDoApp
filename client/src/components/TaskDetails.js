import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { taskDetails } from '../actions/taskActions';

class TaskDetails extends Component {

  constructor() {
    super();
    this.state = {
      task: {},
     
    };
  }

  componentDidMount() {
    this.props.taskDetails(this.props.match.params.id);
    
  }
  
  // componentWillReceiveProps(nextprops){
    
  // }

  render() {
    //  const { task } = this.props.task;
    // let postContent;

    // if (post === null || loading || Object.keys(post).length === 0) {
    //   postContent = <Spinner />;
    // } else {
    //   postContent = (
    //     <div>
    //       <PostItem post={post} showActions={false} />
    //       <CommentForm postId={post._id} />
    //       <CommentFeed postId={post._id} comments={post.comments} />
    //     </div>
    //   );
    // }

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
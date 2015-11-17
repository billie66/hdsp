CommentBox = React.createClass({
  propTypes: {
    comments: React.PropTypes.array.isRequired,
    postId: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="comment-box">
        <h3>发表评论 { this.props.comments.length }</h3>
        <CommentList comments={ this.props.comments } />
        <CommentForm postId={ this.props.postId } />
      </div>
    );
  }
});

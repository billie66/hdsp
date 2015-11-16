CommentBox = React.createClass({
  propTypes: {
    postId: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="comment-box">
        <CommentForm postId={ this.props.postId } />
      </div>
    );
  }
});

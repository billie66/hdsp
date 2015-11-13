Post = React.createClass({
  getInitialState() {
    return {
      posts: [
        "The first post",
        "The second post"
      ]
    };
  },

  getPostId() {
    return this.props.params.postName.split('-')[0];
  },

  render() {
    let style = {
      paddingTop: '100px',
    };
    let postId = parseInt(this.getPostId());

    return (
      <div style={style}>
        { this.state.posts[postId - 1] }
      </div>
    );
  }

});

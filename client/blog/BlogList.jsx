const { Link } = ReactRouter;

BlogList = React.createClass({
  render() {
    const blogItems = _.filter(this.props.posts, (post) => {
      return post.title.toLowerCase().indexOf(this.props.inputText.toLowerCase()) > -1;
    })
    .map((post) => {
      return (
        <Link to={`/blog/${post.id}`} className="item" key={post.id}>
          <div className="left">{post.id}</div>
          <div className="right">
            <div className="title">{post.title}</div>
            <div className="date">{post.created_at}</div>
          </div>
        </Link>
      );
    });


    return (
      <div className={this.props.className}>
        { blogItems }
      </div>
    );
  }
});

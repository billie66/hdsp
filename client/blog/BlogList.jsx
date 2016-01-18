const { Link } = ReactRouter;

BlogList = React.createClass({
  render() {
    const blogItems = _.filter(this.props.posts, (post) => {
      return post.title.toLowerCase().indexOf(this.props.inputText.toLowerCase()) > -1;
    })
    .map((post) => {
      return (
        <div className="item clearfix" key={post.id}>
          <Link to={`/blog/${post.name}`}>
            <div className="icon">{post.id}</div>
            <div className="title">{post.title}</div>
            <div className="date">{post.created_at}</div>
          </Link>
        </div>
      );
    });


    return (
      <div className={this.props.className}>
        { blogItems }
      </div>
    );
  }
});

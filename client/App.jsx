const { Link } = ReactRouter;

App = React.createClass({
  render() {
    return (
      <div>
        <Link to="/"> HOME </Link>
        <Link to="/blog"> BLOG</Link>
        <Link to="/about"> ABOUT </Link>
        {this.props.children}
      </div>
    );
  }
});

Blog = React.createClass({
  getInitialState(){
    return {
      posts: []
    };
  },
  componentWillMount() {
    let that = this;

    Meteor.call('/blog/getPost', "posts", function(err, res){
      if (err) {
        console.log(`The post ${postName} does not exist!`);
        return;
      }
      that.setState({ posts: JSON.parse(res) });
    });
  },
  render() {
    return (
      <div style={{ marginTop: '84px' }}>
        <BlogList posts={this.state.posts}/>
      </div>
    );
  }
});

Post = React.createClass({
  getInitialState() {
    return {
      post: ''
    };
  },

  componentWillMount() {
    let that = this;
    let postName = this.props.params.postName;

    Meteor.call('/blog/getPost', postName, function(err, res){
      if (err) {
        console.log(`The post ${postName} does not exist!`);
        return;
      }

      that.setState({ post: res });
    });
  },

  render() {
    let style = {
      paddingTop: '100px',
    };

    return (
      <div style={style}>
        { this.state.post }
      </div>
    );
  }

});

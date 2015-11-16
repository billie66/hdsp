Post = React.createClass({
  getInitialState() {
    return {
      metaData: {},
      post: ''
    };
  },

  getPostId() {
    return this.props.params.postName.split('-')[0];
  },

  componentWillMount() {
    let that = this;
    let postName = this.props.params.postName;

    Meteor.call('/blog/getPost', postName, function(err, res){
      if (err) {
        console.log(`The post ${postName} does not exist!`);
        return;
      }
      that.setState({
        metaData: res.metaData,
        post: res.postContent
      });
    });
  },

  render() {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let html = marked(this.state.post, {sanitize: true});
    let postId = parseInt(this.getPostId());
    return (
      <div className="post-page">
        <PostHero metaData={this.state.metaData}/>
        <span className="post-content" dangerouslySetInnerHTML={{__html: html}} />
        <CommentBox postId={postId} />
      </div>
    );
  }

});

Post = React.createClass({
  getInitialState() {
    return {
      metaData: {},
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

    return (
      <div className="post-page">
        <PostHero metaData={this.state.metaData}/>
        <span className="post-content" dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }

});

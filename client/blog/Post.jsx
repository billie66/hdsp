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
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let html = marked(this.state.post, {sanitize: true});

    return (
      <div className="post-page">
        <span className="post-content" dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }

});

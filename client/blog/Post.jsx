Post = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      metaData: {},
      post: ''
    };
  },

  getPostId() {
    return this.props.params.postName.split('-')[0];
  },

  getMeteorData() {
    const postId = parseInt(this.getPostId());
    // subscribe to the comments
    Meteor.subscribe("comments", postId);

    return {
      comments: Comments.find({}, {sort: {createdAt: 1}}).fetch(),
    }
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
        <PostHero metaData={this.state.metaData} />
        <Video src="http://7xn2cy.com1.z0.glb.clouddn.com/online-user.mp4" />
        <span className="post-content container" dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }

});

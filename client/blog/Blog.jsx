const { Styles, CircularProgress } = mui;
Blog = React.createClass({
  getInitialState(){
    return {
      posts: [],
      inputText: ''
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

  componentDidMount() {
    $(".loader").delay(1000).fadeOut('slow', function() {
      $(".blog-list").fadeIn('slow');
    });
  },

  render() {
    let styles = {
      root: {
        paddingTop: '64px',
        backgroundColor: '#fafafa',
        minHeight: '50em'
      },
      hero: {
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        paddingTop: '55px',
        paddingBottom: '55px',
        marginBottom: '30px'
      },
      title: {
        fontSize: '48px',
        color: '#fff',
        marginBottom: '20px',
        lineHeight: 1.1
      },
      circle: {
        margin: '0 auto',
        paddingTop: '100px',
        display: 'block'
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.hero}>
          <div style={styles.title}>BLOG</div>
          <SearchBar
            inputText={this.state.inputText}
            onUserInput={this._handleInputChange} />
        </div>
        <CircularProgress
          mode="indeterminate"
          className="loader"
          style={styles.circle} />
        <BlogList
          inputText={this.state.inputText}
          posts={this.state.posts}
          className="blog-list" />
      </div>
    );
  },

  _handleInputChange(text) {
    this.setState({inputText: text})
  }
});

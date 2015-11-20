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
  render() {
    let styles = {
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
      }
    };
    return (
      <div style={{ marginTop: '64px' }}>
        <div style={styles.hero}>
          <div style={styles.title}>BLOG</div>
          <SearchBar
            inputText={this.state.inputText}
            onUserInput={this._handleInputChange} />
        </div>
        <BlogList
          inputText={this.state.inputText}
          posts={this.state.posts}/>
      </div>
    );
  },

  _handleInputChange(text) {
    this.setState({inputText: text})
  }
});

Blog = React.createClass({
  getInitialState(){
    return {
      posts: [
        {
          "id": 1,
          "post_name": "1-beauty",
          "title": "第一个 METEOR 应用",
          "date": "2015年10月1号"
        },
        {
          "id": 2,
          "post_name": "2-beast",
          "title": "狼人传说",
          "date": "2015年10月8号"
        }
      ]
    };
  },

  render() {
    return (
      <div style={{ marginTop: '84px' }}>
        <BlogList posts={this.state.posts}/>
      </div>
    );
  }
});

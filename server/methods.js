Meteor.methods({
  '/blog/getPost': function(postName) {
    var posts = Assets.getText('post/posts.json');
    if ( postName == "posts" ) {
      return posts;
    } else {
      var postId = parseInt(postName.split('-')[0]);
      var metaData = JSON.parse(posts)[postId - 1];
      var postContent = Assets.getText('post/' + postName + '.md');
      return {
        metaData: metaData,
        postContent: postContent
      };
    }
  }
});

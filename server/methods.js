Meteor.methods({
  '/blog/getPost': function(postName) {
    ex = postName === "posts" ?  ".json" : ".md"
    var post = Assets.getText('post/' + postName + ex);
    return post;
  }
});

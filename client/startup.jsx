const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const { createHistory } = History;


const Routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="blog" component={Blog}/>
    <Route path="/blog/:id" component={Post} />
    <Route path="home" component={Home}/>
    <IndexRoute component={Home}/>
  </Route>
);

Meteor.startup(function() {
  ReactDOM.render((
    <Router history={createHistory()}>
      {Routes}
    </Router>
  ), document.getElementById("app-container"));
});

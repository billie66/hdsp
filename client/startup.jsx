const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const Routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="video" component={Video}/>
    <Route path="/v/:id" component={Post} />
    <Route path="home" component={Home}/>
    <Route path="*" component={PageNotFound}/>
    <IndexRoute component={Home}/>
  </Route>
);

Meteor.startup(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      {Routes}
    </Router>
  ), document.getElementById("app-container"));
});

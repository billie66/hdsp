const {
  Router,
  Route
} = ReactRouter;

const Routes = (
  <Route path="/" component={App}/>
);

Meteor.startup(function() {
  ReactDOM.render((
    <Router>
      {Routes}
    </Router>
  ), document.getElementById("container"));
});

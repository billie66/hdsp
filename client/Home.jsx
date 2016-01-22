const { RaisedButton } = mui;

Home = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="overlay">
          <div className="content">
            <h1 className="title">
              hi! i&#39;m
              <span className="name">happypeter</span>
            </h1>
            <h2 className="subtitle">
              a web developer
            </h2>
          </div>
        </div>
      </div>
    );
  }
});

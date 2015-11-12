const { Tab, Tabs } = mui;

App = React.createClass({
  render() {
    return (
      <div>
        <Tabs>
          <Tab
            value='1'
            label='Home'
            route='/home'
           />
          <Tab
            value='2'
            label='Blog'
            route='/blog'
           />
          <Tab
            value='3'
            label='About'
            route='/about'
            />
        </Tabs>
        {this.props.children}
      </div>
    );
  }
});

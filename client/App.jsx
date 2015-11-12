const { Tab, Tabs } = mui;

App = React.createClass({
  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },
  render() {
    return (
      <div>
        <Tabs
          value={this.state.tabIndex}
          onChange={this._handleTabsChange}>
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
  },
  _getSelectedIndex() {
    return this.props.history.isActive('/home') ? '1' :
      this.props.history.isActive('/blog') ? '2' :
      this.props.history.isActive('/about') ? '3' : '0';
  },

  _handleTabsChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route);
    this.setState({tabIndex: this._getSelectedIndex()});
  }
});

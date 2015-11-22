const { AppBar } = mui;

App = React.createClass({
  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });

    let setTabsState = function() {
      this.setState({renderTabs: !(document.body.clientWidth <= 647)});
    }.bind(this);
    setTabsState();
    window.onresize = setTabsState;
  },

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },

  render() {
    return (
      <div>
        { this.state.renderTabs ? (
          <NavBarTabs
            onHandleTabsChange={this._handleTabsChange}
            tabIndex={this.state.tabIndex} />
        ) : this._getAppBar() }

        <AppLeftNav ref="leftNav" history={this.props.history} />

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
  },

  _getAppBar() {
    let title = this.props.history.isActive('/home') ? 'Home' :
      this.props.history.isActive('/blogs') ? 'Blogs' :
      this.props.history.isActive('/about') ? 'About' : '';

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={1}
          style={{position: 'absolute', top: 0}}/>
      </div>
    );
  },

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
});

const { Paper, Tab, Tabs } = mui;

App = React.createClass({
  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },
  render() {
    let styles = {
      root: {
        position: 'fixed',
        height: 64,
        top: 0,
        right: 0,
        zIndex: 4,
        width: '100%'
      },
      tabs: {
        width: '300px',
        position: 'absolute',
        right: 60,
        textTransform: 'uppercase'
      },
      tab: {
        height: 64,
        color: '#727272'
      },
      inkBar: {
        backgroundColor: "#00bcd4",
        height: '4px',
        marginTop: '-4px'
      }
    };

    return (
      <div>
        <Paper style={styles.root}>
          <Tabs
            style={styles.tabs}
            tabItemContainerStyle={{backgroundColor: '#fff'}}
            inkBarStyle={styles.inkBar}
            value={this.state.tabIndex}
            onChange={this._handleTabsChange}>
            <Tab
              style={styles.tab}
              value='1'
              label='Home'
              route='/home'
             />
            <Tab
              style={styles.tab}
              value='2'
              label='Blog'
              route='/blog'
             />
            <Tab
              style={styles.tab}
              value='3'
              label='About'
              route='/about'
              />
          </Tabs>
        </Paper>
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

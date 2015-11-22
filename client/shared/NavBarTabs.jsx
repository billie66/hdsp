const { Paper, Tabs, Tab } = mui;

NavBarTabs = React.createClass({
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
      <Paper style={styles.root}>
        <Tabs
          style={styles.tabs}
          tabItemContainerStyle={{backgroundColor: '#fff'}}
          inkBarStyle={styles.inkBar}
          value={this.props.tabIndex}
          onChange={this.props.onHandleTabsChange}>
          <Tab
            style={styles.tab}
            value='1'
            label='Home'
            route='/home' />
          <Tab
            style={styles.tab}
            value='2'
            label='Blog'
            route='/blog' />
          <Tab
            style={styles.tab}
            value='3'
            label='About'
            route='/about' />
        </Tabs>
      </Paper>
    );
  }
});

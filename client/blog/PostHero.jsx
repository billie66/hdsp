PostHero = React.createClass({
  render() {
    let styles = {
      root: {
        marginTop: 64,
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        paddingTop: '55px',
        paddingBottom: '55px',
        marginBottom: '30px'
      },
      title: {
        fontSize: '48px',
        color: '#fff',
        marginBottom: '7px',
        lineHeight: 1.1
      },
      date: {
        color: '#fff'
      }
    };

    let meta = this.props.metaData;
    let title, date;
    if(!_.isEmpty(meta)) {
      title = meta.title;
      date = meta.date;
    }

    return (
      <div style={styles.root}>
        <div style={styles.title}>{title}</div>
        <div style={styles.date}>{date}</div>
      </div>
    );
  }
});

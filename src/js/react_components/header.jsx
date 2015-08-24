module.exports = function(mui, ThemeManager){

  var AppBar = mui.AppBar;

  var Header = React.createClass({

    childContextTypes: {
      muiTheme: React.PropTypes.object
    },

    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },

    render() {
      return (
          <AppBar
            title={this.props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
      );
    }

  });

  return Header;

}
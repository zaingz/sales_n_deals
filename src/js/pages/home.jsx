var ReactCSSTransitionGroup =  require('react/lib/ReactCSSTransitionGroup')

var Home = React.createClass({
  render: function () {
    return (
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} >
          <h2>Home</h2>
        </ReactCSSTransitionGroup>
      );
  }
});

module.exports = Home;